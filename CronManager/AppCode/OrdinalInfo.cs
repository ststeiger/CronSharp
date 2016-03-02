
namespace CronManager.ajax
{


    public class TranslationMatrix
    {
        public System.Collections.Generic.Dictionary<string, System.Collections.Generic.Dictionary<string, string>> dict;

        public TranslationMatrix()
        {
            this.dict = new System.Collections.Generic.Dictionary<string, System.Collections.Generic.Dictionary<string, string>>();

            dict.Add("de-CH", new System.Collections.Generic.Dictionary<string, string>());



            dict["de-CH"]["Every"] = "Alle";
            dict["de-CH"]["minute(s)"] = "Minute(n)";



            dict["de-CH"]["day(s)"] = "Tag(e)";
            dict["de-CH"]["hour(s)"] = "Stunde(n)";
            dict["de-CH"]["month(s)"] = "Monat(e)";
            dict["de-CH"]["Start Time"] = "Startzeit";
            dict["de-CH"]["Day"] = "Tag";
            dict["de-CH"]["of every"] = "alle";
            dict["de-CH"]["The"] = "Der";
            dict["de-CH"]["in day"] = "am Tag";
            dict["de-CH"]["of"] = "im"; // "of", "des"
            dict["de-CH"]["Every week day"] = "Jeden Wochentag (Mo-Fri)";
            dict["de-CH"]["At"] = "Um";
            dict["de-CH"]["Monday to Friday"] = "Montag bis Freitag";
            dict["de-CH"]["Start time"] = "Startzeit";



            dict["de-CH"]["Last"] = "Letzer";


            //dict["de-CH"]["Every"] = "Alle";
            //dict["de-CH"]["Every"] = "Alle";
            //dict["de-CH"]["Every"] = "Alle";
            //dict["de-CH"]["Every"] = "Alle";
            //dict["de-CH"]["Every"] = "Alle";
            //dict["de-CH"]["Every"] = "Alle";
            //dict["de-CH"]["Every"] = "Alle";
            //dict["de-CH"]["Every"] = "Alle";
            //dict["de-CH"]["Every"] = "Alle";
            //dict["de-CH"]["Every"] = "Alle";
            //dict["de-CH"]["Every"] = "Alle";


            dict.Add("en-US", new System.Collections.Generic.Dictionary<string, string>());
            foreach (string key in this.dict["de-CH"].Keys)
            {
                dict["en-US"][key] = key;
            } // Next key


            System.Globalization.CultureInfo[] cis = System.Globalization.CultureInfo.GetCultures(System.Globalization.CultureTypes.SpecificCultures);

            foreach (System.Globalization.CultureInfo ci in cis)
            {
                if (!dict.ContainsKey(ci.Name))
                {
                    bool bAdd = true;

                    foreach (string strLanguage in dict.Keys)
                    {
                        if (0 == string.Compare(strLanguage, 0, ci.Name, 0, 2, true, System.Globalization.CultureInfo.InvariantCulture))
                        {
                            System.Console.WriteLine(ci.Name);
                            dict.Add(ci.Name, dict[strLanguage]);
                            bAdd = false;
                            break;
                        } // End if ci.Name.StartsWith(fis[i].Name

                    } // Next i

                    // if (bAdd) dict.Add(ci.Name, standard);
                } // End if (!dict.ContainsKey(ci.Name))

            } // Next ci


        } // End Constructor 


    } // End Class TranslationMatrix


    public class OrdinalInfo
    {
        //public static string[] DE_m = new string[] { "Nullter", "Erster", "Zweiter", "Dritter", "Vierter", "Letzter" };
        public static string[] DE = new string[] { "Nullte", "Erste", "Zweite", "Dritte", "Vierte", "Letzte" };
        public static string[] FR = new string[] { "Zéro-ième", "Premier", "Deuxième", "Troisième", "Quatrième", "Dernier" };
        public static string[] IT = new string[] { "Zeroa", "Prima", "Seconda", "Terza", "Quarta", "Ultimo" };
        public static string[] EN = new string[] { "Zeroeth", "First", "Second", "Third", "Fourth", "Last" };
        public static string[] NO = new string[] { "Nullte", "Første", "Andre", "Tredje", "Fjerde", "Siste" };
        public static string[] SV = new string[] { "Nollde", "Först", "Andra", "Tredje", "Fjärde", "Sista" };

        public static string[] ES = new string[] { "Ceroa", "Primera", "Segunda", "Tercera", "Cuarta", "último" };
        public static string[] PT = new string[] { "Zero", "Primeiro", "Segundo", "Terceiro", "Quarto", "último" };
        public static string[] FI = new string[] { "Nolla-nnen", "Ensimmäinen", "Toinen", "Kolmas", "Neljäs", "viime" };
        public static string[] HU = new string[] { "nulladik", "első", "második", "harmadik", "negyedik", "utolsó" };

        public static string[] TR = new string[] { "Sıfıri", "birinci", "ikinci", "üçüncü", "dördüncü", "son" };
        public static string[] UZ = new string[] { "nolinchi", "birinchi", "ikkinchi", "uchinchi", "to'rtinchi", "oxirgi" };

        public static string[] RU = new string[] { "Нулевой", "первый", "второй", "третий", "четвертый", "последний" };
        public static string[] UK = new string[] { "нульовий", "перший", "другий", "третій", "четвертий", "останній" };
        public static string[] BE = new string[] { "нулявы", "першы", "другі", "трэці", "чацвёрты", "апошні" };
        public static string[] SL = new string[] { "Ničti", "prva", "drugi", "tretji", "četrti", "zadnja" };
        public static string[] BG = new string[] { "нулевия", "първи", "втори", "трети", "четвърти", "последно" };
        public static string[] EL = new string[] { "μηδενική", "πρώτα", "δεύτερος", "τρίτος", "τέταρτος", "τελευταίος" };

        public static string[] ZH = new string[] { "第零", "第一", "第二", "第三", "第四", "最后" };
        public static string[] VI = new string[] { "số không", "đầu tiên", "thứ hai", "thứ ba", "thứ tư", "cuối cùng" };
        public static string[] JP = new string[] { "ゼロ番目", "最初", "第2", "第3", "第4", "最後" };
        public static string[] TH = new string[] { "ศูนย์", "แรก", "ที่สอง", "ที่สาม", "ที่สี่", "ล่าสุด" };

        public static string[] standard = new string[] { "0.", "1.", "2.", "3.", "4.", "L." };


        public System.Collections.Generic.Dictionary<string, string[]> dict;


        public OrdinalInfo()
        {
            this.dict = new System.Collections.Generic.Dictionary<string, string[]>();

            dict.Add("de-CH", DE);
            dict.Add("fr-CH", FR);
            dict.Add("it-CH", IT);
            dict.Add("en-US", EN);
            dict.Add("nn-NO", NO);
            dict.Add("sv-SE", SV);

            dict.Add("es-ES", ES);
            dict.Add("pt-PT", PT);

            dict.Add("ru-RU", RU);
            dict.Add("uk-UA", UK);
            dict.Add("be-BY", BE);


            dict.Add("sl-SI", SL);
            dict.Add("bg-BG", BG);
            dict.Add("el-GR", EL);

            dict.Add("zh-CN", ZH);
            dict.Add("vi-VN", VI);
            dict.Add("ja-JP", JP);
            dict.Add("th-TH", TH);


            foreach (var kvp in dict)
            {
                System.Globalization.CultureInfo ci = new System.Globalization.CultureInfo(kvp.Key);
                System.Globalization.RegionInfo ri = new System.Globalization.RegionInfo(ci.Name);


                // var regionalLanguages = System.Globalization.CultureInfo.GetCultures(System.Globalization.CultureTypes.AllCultures)
                // .Where(x => x.Parent.Equals(parent));

                // ri.IsMetric ri.GeoId ri.ISOCurrencySymbol

                System.Console.WriteLine(ri.IsMetric);

                for (int i = 0; i < kvp.Value.Length; ++i)
                {
                    dict[kvp.Key][i] = ci.TextInfo.ToTitleCase(kvp.Value[i]);
                } // Next i 

            } // Next kvp


            System.Globalization.CultureInfo[] cis = System.Globalization.CultureInfo.GetCultures(System.Globalization.CultureTypes.SpecificCultures);

            System.Type t = this.GetType();
            var fis = t.GetFields();


            foreach (System.Globalization.CultureInfo ci in cis)
            {
                if (!dict.ContainsKey(ci.Name))
                {

                    bool bAdd = true;

                    for (int i = 1; i < fis.Length - 1; ++i)
                    {
                        if (ci.Name.StartsWith(fis[i].Name + "-", System.StringComparison.InvariantCultureIgnoreCase))
                        {
                            System.Console.WriteLine(ci.Name);
                            string[] vals = (string[])fis[i].GetValue(null);
                            dict.Add(ci.Name, vals);
                            bAdd = false;
                            break;
                        } // End if ci.Name.StartsWith(fis[i].Name

                    } // Next i

                    if (bAdd)
                        dict.Add(ci.Name, standard);
                } // End if (!dict.ContainsKey(ci.Name))

            } // Next ci

            System.Console.WriteLine(dict);

        } // End Constructor OrdinalInfo


    } // End Class OrdinalInfo


} // End Namespace CronManager.ajax 
