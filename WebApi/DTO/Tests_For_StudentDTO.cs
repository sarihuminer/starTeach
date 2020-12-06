using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
   public class Tests_For_StudentDTO
    {
        public int Serial_Num { get; set; }
        public Nullable<int> Code_Subjects_For_Classes { get; set; }
        public Nullable<int> Tests_Code { get; set; }
        public Nullable<int> ID_Student { get; set; }
        public int Mark { get; set; }
        public System.DateTime Update_Date { get; set; }
        public System.DateTime Add_Date { get; set; }
    }
}
