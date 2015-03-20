
using System.Windows.Forms;

using Quartz;
using Quartz.Impl;
using Quartz.Impl.Triggers;

// Necessary references:
// Quartz dll
// Common.Logging
// System.Web
// System.Web.Services


// https://github.com/kevincolyar/CronNET/tree/master/CronNET
// http://www.quartz-scheduler.net/documentation/quartz-2.x/tutorial/crontriggers.html
// http://www.codeproject.com/Articles/10992/Implementing-a-small-Cron-service-in-C


namespace CronSharp
{


    static class Program
    {


        internal class MinuteClock : IJob
        {
            public void Execute(IJobExecutionContext context)
            {
                System.Console.WriteLine("Time: {0}", System.DateTime.Now.ToString("yyyyMMdd HH:mm:ss.fff"));
            }
        }


        // http://stackoverflow.com/questions/14912494/scheduling-cron-jobs-with-quartz-net
        public static void Test()
        {

            //System.Globalization.CultureInfo ci = new System.Globalization.CultureInfo("en-US");
            //// System.Globalization.CultureInfo ci = new System.Globalization.CultureInfo("it-CH");
            //System.Threading.Thread.CurrentThread.CurrentCulture = ci;
            //System.Threading.Thread.CurrentThread.CurrentUICulture = ci;

            ISchedulerFactory schedulerFactory = new StdSchedulerFactory();
            IScheduler scheduler = schedulerFactory.GetScheduler();

            IJobDetail jobDetail = JobBuilder.Create<MinuteClock>()
                .WithIdentity("TestJob")
                .Build();

            ITrigger trigger = TriggerBuilder.Create()
                .ForJob(jobDetail)
                //.WithCronSchedule("0 45 20 * * ?") // Every day 20:45
                //.WithCronSchedule("0/5 * * * * ?") // Every 5 minutes
                .WithCronSchedule("15/5 * * * * ?") // Every 5 seconds between 15 and 60
                
                .WithIdentity("TestTrigger")
                .StartNow()
                .Build();

            scheduler.ScheduleJob(jobDetail, trigger);

            scheduler.Start();
        }



        /// <summary>
        /// Der Haupteinstiegspunkt für die Anwendung.
        /// </summary>
        [System.STAThread]
        static void Main()
        {
#if false
            Application.EnableVisualStyles();
            Application.SetCompatibleTextRenderingDefault(false);
            Application.Run(new Form1());
#endif
            Test();
        }



    }
}
