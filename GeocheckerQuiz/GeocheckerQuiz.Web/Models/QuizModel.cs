using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GeocheckerQuiz.Web.Models
{
    public class QuizModel
    {
        public int QuizId { get; set; }
        public string Title { get; set; }
        public string OwnerId { get; set; }
    }
}
