using Recruit.Domain;

namespace Recruit.Services
{
    public interface IMailService
    {
        void Send(Email data);
    }
}