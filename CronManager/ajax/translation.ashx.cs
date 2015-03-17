
using System.Web;


namespace CronManager.ajax
{


    /// <summary>
    /// Zusammenfassungsbeschreibung für translation
    /// </summary>
    public class translation : IHttpHandler
    {



        public static void GenerateJSON()
        {
            System.Collections.Generic.Dictionary<string, System.Collections.Generic.List<string>> dict = new System.Collections.Generic.Dictionary<string, System.Collections.Generic.List<string>>();

            System.Globalization.CultureInfo[] cis = System.Globalization.CultureInfo.GetCultures(System.Globalization.CultureTypes.SpecificCultures);

            foreach (System.Globalization.CultureInfo ci in cis)
            {
                System.Collections.Generic.List<string> ls = new System.Collections.Generic.List<string>();
                ls.Add("");

                //ls.AddRange(ci.DateTimeFormat.DayNames);


                /*
                for (int i = 0; i < 12; ++i)
                {
                    // string name = ci.DateTimeFormat.GetMonthName(i);
                    ls.Add(ci.DateTimeFormat.MonthNames[i]);
                    //System.Console.WriteLine(name);
                }
                 */

                for (int i = 1; i < 7; ++i)
                {
                    ls.Add(ci.DateTimeFormat.DayNames[i]);
                } // Next i
                ls.Add(ci.DateTimeFormat.DayNames[0]);


                dict.Add(ci.Name, ls);
            } // Next ci

            

        } // End Sub GenerateJSON 




        public static string ToJSON(object obj)
        {
            return ToJSON(obj, true);
        }


        public static string ToJSON(object obj, bool prettyPrint)
        {

            Newtonsoft.Json.JsonSerializerSettings settings = new Newtonsoft.Json.JsonSerializerSettings { NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore };
            if (!prettyPrint)
            {
                settings.Formatting = Newtonsoft.Json.Formatting.None;
            }
            else
            {
                settings.Formatting = Newtonsoft.Json.Formatting.Indented;
            }
            settings.DateFormatHandling = Newtonsoft.Json.DateFormatHandling.MicrosoftDateFormat;


            string strResult = Newtonsoft.Json.JsonConvert.SerializeObject(obj, settings);
            System.Console.WriteLine(strResult);
            return strResult;
        }


        public void ProcessRequest(HttpContext context)
        {
            OrdinalInfo oi = new OrdinalInfo();
            TranslationMatrix tm = new TranslationMatrix();


            context.Response.ContentType = "text/plain";
            //context.Response.ContentType = "application/json";
            //string strResult = ToJSON(oi.dict);
            string strResult = ToJSON(tm.dict);
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
