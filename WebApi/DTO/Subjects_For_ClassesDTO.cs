using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    class Subjects_For_ClassesDTO
    {
        public int Serial_Num { get; set; }
        public Nullable<int> Class_Code { get; set; }
        public Nullable<int> ID_Teacher { get; set; }
        public Nullable<int> Subjects_Code { get; set; }
        public Nullable<int> Semester_Code { get; set; }
        public Nullable<int> Educational_Level_Code { get; set; }
        public System.DateTime Update_Date { get; set; }
        public System.DateTime Add_Date { get; set; }

    }
}
