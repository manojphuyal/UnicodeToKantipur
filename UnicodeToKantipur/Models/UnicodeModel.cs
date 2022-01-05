using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UnicodeConverter.Models
{
    public class UnicodeModel
    {
        public string Message { get; set; }
        public string InputText { get; set; }
        public string UnicodeOptionFirst { get; set; }
        public List<UnicodeOptionDto> UnicodeOptionDtos { get; set; }

        public class UnicodeOptionDto
        {
            public string UnicodeOption { get; set; }
        }
    }
}
