using System;
using System.Collections.Generic;
using System.Configuration;
using System.Web;

namespace Recruit.Domain
{
    public class Constants
    {
        public class Email
        {
            public static string EmailTo {  get { return ConfigurationManager.AppSettings["EmailTo"]; } } 
            public static string Subject { get { return ConfigurationManager.AppSettings["Subject"]; } }
            public static string SmtpUserName { get  { return ConfigurationManager.AppSettings["SmtpUserName"];} }
            public static string SmtpPassword { get  { return ConfigurationManager.AppSettings["SmtpPassword"];} }
            public static string SmtpHost { get { return ConfigurationManager.AppSettings["SmtpHost"]; } }   
        }

        public static string Tel { get { return ConfigurationManager.AppSettings["Tel"]; } }
    }
}
