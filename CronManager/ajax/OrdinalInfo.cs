
namespace CronManager.ajax
{



    public class OrdinalInfo
    {
        public static string[] DE = new string[] { "Nullter", "Erster", "Zweiter", "Dritter", "Vierter" };
        public static string[] FR = new string[] { "Zéro-ième", "Premier", "Deuxième", "Troisième", "Quatrième" };
        public static string[] IT = new string[] { "Zeroa", "Prima", "Seconda", "Terza", "Quarta" };
        public static string[] EN = new string[] { "Zeroeth", "First", "Second", "Third", "Fourth" };
        public static string[] NO = new string[] { "Nullte", "Første", "Andre", "Tredje", "Fjerde" };
        public static string[] SV = new string[] { "Nollde", "Först", "Andra", "Tredje", "Fjärde" };

        public static string[] ES = new string[] { "Ceroa", "Primera", "Segunda", "Tercera", "Cuarta" };
        public static string[] PT = new string[] { "Zero", "Primeiro", "Segundo", "Terceiro", "Quarto" };
        public static string[] FI = new string[] { "Nolla-nnen", "Ensimmäinen", "Toinen", "Kolmas", "Neljäs" };
        public static string[] HU = new string[] { "nulladik", "első", "második", "harmadik", "negyedik" };

        public static string[] TR = new string[] { "Sıfıri", "birinci", "ikinci", "üçüncü", "dördüncü" };
        public static string[] UZ = new string[] { "nolinchi", "birinchi", "ikkinchi", "uchinchi", "to'rtinchi" };

        public static string[] RU = new string[] { "Нулевой", "первый", "второй", "третий", "четвертый" };
        public static string[] UK = new string[] { "нульовий", "перший", "другий", "третій", "четвертий" };
        public static string[] BE = new string[] { "нулявы", "першы", "другі", "трэці", "чацвёрты" };
        public static string[] SL = new string[] { "Ničti", "prva", "drugi", "tretji", "četrti" };
        public static string[] BG = new string[] { "нулевия", "първи", "втори", "трети", "четвърти" };
        public static string[] EL = new string[] { "μηδενική", "πρώτα", "δεύτερος", "τρίτος", "τέταρτος" };

        public static string[] ZH = new string[] { "第零", "第一", "第二", "第三", "第四" };
        public static string[] VI = new string[] { "số không", "đầu tiên", "thứ hai", "thứ ba", "thứ tư" };
        public static string[] JP = new string[] { "ゼロ番目", "最初", "第2", "第3", "第4" };
        public static string[] TH = new string[] { "ศูนย์", "แรก", "ที่สอง", "ที่สาม", "ที่สี่" };

        public static string[] standard = new string[] { "0.", "1.", "2.", "3.", "4." };



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


}
