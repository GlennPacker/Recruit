using Recruit.Domain;
using System.Net.Mail;
using System.Net;

namespace Recruit.Services
{
    public class MailService : IMailService
    {
        public void Send(Email data)
        {
            var message = new MailMessage();
            message.To.Add(new MailAddress(Constants.Email.EmailTo));
            message.From = new MailAddress(data.ReplyEmail);
            message.ReplyToList.Add(new MailAddress(data.ReplyEmail));
            message.Subject = Constants.Email.Subject; 
            message.Body = string.Format("<p>Email From: {0} ({1})</p><p>Message:</p><p>{2}</p>", data.Name, data.ReplyEmail, data.Enquiry);
            message.IsBodyHtml = true;
            
            using (var smtp = new SmtpClient())
            {
                smtp.Credentials = new NetworkCredential
                {
                    UserName = Constants.Email.SmtpUserName,
                    Password = Constants.Email.SmtpPassword 
                };
                smtp.Host = Constants.Email.SmtpHost;
                smtp.Port = 110;
                smtp.EnableSsl = false;
                smtp.SendMailAsync(message);
            }
        }
    }
}
