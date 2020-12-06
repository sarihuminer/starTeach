using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
   public class Grade_Categories_For_SchoolDTO
    {
        public int Categorie_Code { get; set; }
        public int Mark { get; set; }
        public int From_Mark { get; set; }
        public int TO_Mark { get; set; }
        public string Mark_Name { get; set; }
    }
}
