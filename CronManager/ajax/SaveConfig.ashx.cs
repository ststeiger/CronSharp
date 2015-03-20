
using System.Web;


namespace CronManager.ajax
{


    /// <summary>
    /// Zusammenfassungsbeschreibung für SaveConfig
    /// </summary>
    public class SaveConfig : IHttpHandler
    {


        public class cAjaxResult
        {
            public bool isError = false;
            public string ErrorMessage;
            public string cronTab;
        }


        public void ProcessRequest(HttpContext context)
        {
            //context.Response.ContentType = "text/plain";
            context.Response.ContentType = "application/json";
            cAjaxResult AjaxResult = new cAjaxResult();

            try
            {
                AjaxResult.cronTab = context.Request.Params["crontab"];
            }
            catch (System.Exception ex)
            {
                AjaxResult.ErrorMessage = ex.Message;
            }

            // string strResult = "bla bla";
            string strResult = Tools.JSON.Serialize(AjaxResult);

            string strBasePath = "";

            string strCurrentDirectory = System.Web.Hosting.HostingEnvironment.IsHosted ? System.Web.Hosting.HostingEnvironment.MapPath("~")
                : System.IO.Path.GetDirectoryName(System.Reflection.Assembly.GetExecutingAssembly().Location);
            System.IO.DirectoryInfo di = new System.IO.DirectoryInfo(strCurrentDirectory);
            strBasePath = System.IO.Path.Combine(di.Parent.FullName, "CronSharp");
            strBasePath = System.IO.Path.Combine(strBasePath, "CronSharp.ini");

            System.IO.File.WriteAllText(strBasePath, AjaxResult.cronTab, System.Text.Encoding.UTF8);

            System.Console.WriteLine(strResult);
            context.Response.Write(strResult);
        }


        public bool IsReusable
        {
            get
            {
                return false;
            }
        }


    }


}
