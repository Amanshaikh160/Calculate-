   // Select elements
   const obtainedMarksInput = document.querySelector(".obt");
   const totalMarksInput = document.querySelector(".total");
   const calculateButton = document.querySelector(".btn");
   const resultInput = document.querySelector(".per input:nth-of-type(1)");
   const gradeInput = document.querySelector(".per input:nth-of-type(2)");

   // Calculate percentage
   function calculatePercentage(obtained, total) {
       if (obtained > total || obtained < 0 || total <= 0) {
           return "Invalid Input";
       }
       return ((obtained / total) * 100).toFixed(2);
   }

   // Determine grade using a switch statement
   function determineGrade(percentage) {
       switch (true) {
           case percentage >= 80 && percentage <= 100:
               return "A+";
           case percentage >= 70 && percentage < 80:
               return "A";
           case percentage >= 60 && percentage < 70:
               return "B";
           case percentage >= 50 && percentage < 60:
               return "C";
           case percentage >= 34 && percentage < 50:
               return "D";
           case percentage >= 0 && percentage < 34:
               return "Fail";
           default:
               return "Invalid";
       }
   }

   // Add event listener to the button
   calculateButton.addEventListener("click", () => {
       const obtainedMarks = parseFloat(obtainedMarksInput.value);
       const totalMarks = parseFloat(totalMarksInput.value);

       if (isNaN(obtainedMarks) || isNaN(totalMarks)) {
           resultInput.value = "Enter valid numbers!";
           gradeInput.value = "";
       } else {
           const percentage = calculatePercentage(obtainedMarks, totalMarks);
           if (percentage === "Invalid Input") {
               resultInput.value = "Invalid Input";
               gradeInput.value = "";
           } else {
               resultInput.value = percentage + " %";
               gradeInput.value = determineGrade(percentage);
           }
       }
   });
