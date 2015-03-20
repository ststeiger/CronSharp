using System;
using System.Collections.Generic;
using System.Web;

namespace Tools
{


    public class JSON
    {


        public static string Serialize(object obj)
        {
            return Serialize(obj, true);
        }


        public static string Serialize(object obj, bool prettyPrint)
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


    }


}