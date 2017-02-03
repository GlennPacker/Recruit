using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using Recruit.Domain;

namespace Recruit.Infastructure
{
    public class RepositoryBase<T> : IRepositoryBase<T> where T : EntityBase
    {
        private readonly RecruitContext _db;

        public RepositoryBase(RecruitContext db)
        {
            _db = db;
        }

        public T Get(int id)
        {
            return GetById(id);
        }

        public IQueryable<T> GetList(List<int> ids)
        {
            var result = _db.Set<T>().Where(r => ids.Contains(r.Id));
            return result;
        }

        public IQueryable<T> List()
        {
            var result = _db.Set<T>();
            return result;
        }

        public void Add(T model)
        {
            _db.Set<T>().Add(model);
            Save();
        }

        public void Update(T model)
        {
            _db.Entry(model).State = EntityState.Modified;
            Save();
        }

        public void Edit(T model)
        {
            if(model.Id == 0)
                Add(model);
            else
                Update(model);
        }

        public void Save()
        {
            _db.SaveChanges();
        }

        public void Delete(int id)
        {
            _db.Set<T>().Remove(GetById(id));
            Save();
        }

        public T GetById(int id)
        {
            return _db.Set<T>().Find(id);
        }
    }
}
