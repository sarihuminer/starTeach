using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
   public class StudentDTO
    {
        public int Serial_Num { get; set; }
        public int ID_Student { get; set; }
        public string First_Name { get; set; }
        public string Last_Name { get; set; }
        public string Tel { get; set; }
        public string Mail { get; set; }
        public string Password { get; set; }
        public Nullable<int> Class_Code { get; set; }
        public Nullable<int> City_Code { get; set; }
        public System.DateTime Update_Date { get; set; }
        public System.DateTime Add_Date { get; set; }
    }
}
