
using Quartz; // For .WithCronSchedule extension method...
// using Quartz.Impl;
// using Quartz.Impl.Triggers;


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


        internal class MinuteClock : Quartz.IJob
        {


            public void Execute(Quartz.IJobExecutionContext context)
            {
                System.Console.WriteLine("Time: {0}", System.DateTime.Now.ToString("yyyyMMdd HH:mm:ss.fff"));
            } // End Sub Execute 


        } // End Class MinuteClock 


        // http://stackoverflow.com/questions/14912494/scheduling-cron-jobs-with-quartz-net
        public static void Test()
        {

            //System.Globalization.CultureInfo ci = new System.Globalization.CultureInfo("en-US");
            //// System.Globalization.CultureInfo ci = new System.Globalization.CultureInfo("it-CH");
            //System.Threading.Thread.CurrentThread.CurrentCulture = ci;
            //System.Threading.Thread.CurrentThread.CurrentUICulture = ci;

            Quartz.ISchedulerFactory schedulerFactory = new Quartz.Impl.StdSchedulerFactory();
            Quartz.IScheduler scheduler = schedulerFactory.GetScheduler();

            Quartz.IJobDetail jobDetail = Quartz.JobBuilder.Create<MinuteClock>()
                .WithIdentity("TestJob")
                .Build();

            Quartz.ITrigger trigger = Quartz.TriggerBuilder.Create()
                .ForJob(jobDetail)
                //.WithCronSchedule("0 45 20 * * ?") // Every day 20:45
                //.WithCronSchedule("0/5 * * * * ?") // Every 5 minutes
                .WithCronSchedule("15/5 * * * * ?") // Every 5 seconds between 15 and 60
                
                .WithIdentity("TestTrigger")
                .StartNow()
                .Build();

            scheduler.ScheduleJob(jobDetail, trigger);

            scheduler.Start();
            System.Console.WriteLine("started");
        } // End Sub Test 


        /// <summary>
        /// Der Haupteinstiegspunkt für die Anwendung.
        /// </summary>
        [System.STAThread]
        static void Main()
        {
#if false 
            System.Windows.Forms.Application.EnableVisualStyles();
            System.Windows.Forms.Application.SetCompatibleTextRenderingDefault(false);
            System.Windows.Forms.Application.Run(new Form1());
#endif

            Configure();

            // Test();
        } // End Sub Main 


        public static void Configure()
        {
            int iPort = 8080; // If admin rights it requires, wrong it is ;)
            iPort = 30080; // Damn !  I still no haz no admin rightz !


            string strBasePath = "";

            string strCurrentDirectory = System.IO.Path.GetDirectoryName(System.Reflection.Assembly.GetExecutingAssembly().Location);
            System.IO.DirectoryInfo di = new System.IO.DirectoryInfo(strCurrentDirectory);
            strBasePath = System.IO.Path.Combine(di.Parent.Parent.Parent.FullName, "CronManager");
            


            //EmbeddableWebServer.cWebSource WebSource = new EmbeddableWebServer.cWebSource(System.Net.IPAddress.Any, iPort);
            Mono.WebServer.XSPWebSource ws = new Mono.WebServer.XSPWebSource(System.Net.IPAddress.Any, iPort);

            // EmbeddableWebServer.cServer Server = new EmbeddableWebServer.cServer(WebSource, strBasePath);
            Mono.WebServer.ApplicationServer Server = new Mono.WebServer.ApplicationServer(ws, strBasePath);

            Server.AddApplication("localhost", iPort, "/", strBasePath);
            Server.Start(true, 0);


            System.Diagnostics.Process.Start("\"http://localhost:" + iPort.ToString() + "\"");

            System.Console.WriteLine(" --- Server up and running. Press any key to quit --- ");
            System.Console.ReadKey();

            Server.Stop();
        } // End Sub Configure 


    } // End Class Program 


} // End Namespace CronSharp 
