using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;
using Biblioteca.Data.Modelos;

namespace Biblioteca.Data
{
    public class BibliotecaContext: DbContext
    {
        public BibliotecaContext() { }

        public BibliotecaContext(string ConnectionName):base(ConnectionName)
        {

        }

        public DbSet<Libro> Libro { get; set; }
        public DbSet<Editorial> Editorial { get; set; }
    }
}
