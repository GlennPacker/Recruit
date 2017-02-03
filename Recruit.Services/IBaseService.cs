using System.Collections.Generic;

namespace Recruit.Services
{
    public interface IBaseService<T>
    {
        List<T> List();
        void Edit(T model);
        T Get(int id);
        void Delete(int id);
    }
}