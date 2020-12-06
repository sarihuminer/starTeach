using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
  public  class Student_Grade_ScoreDTO
    {
        public int Serial_Num { get; set; }
        public Nullable<int> Code_Subjects_For_Classes { get; set; }
        public Nullable<int> ID_Student { get; set; }
        public Nullable<int> Average_Mark { get; set; }
        public System.DateTime Update_Date { get; set; }
        public System.DateTime Add_Date { get; set; }
    }
}
