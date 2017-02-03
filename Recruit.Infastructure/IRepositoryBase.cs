using System.Collections.Generic;
using System.Linq;
using Recruit.Domain;

namespace Recruit.Infastructure
{
    public interface IRepositoryBase<T> where T : EntityBase
    {
        T Get(int id);
        IQueryable<T> GetList(List<int> ids);
        IQueryable<T> List();
        void Add(T model);
        void Update(T model);
        void Edit(T model);
        void Save();
        void Delete(int id);
    }
}