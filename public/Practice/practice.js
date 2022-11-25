// import $ from jquery;

function getDomain(id){

  if (id === "DS") {
    domain = "Data Science";
  } else if (id === "DBMS") {
    domain = "Database Management System";
  }
  else if (id === "CG") {
    domain = "Computer Graphics";
  }
  else if (id === "CAO") {
    domain = "Computer Architecture and Organization";
  }
  else {
    domain = "ELSE Executed";
  }
  return domain;
}

function displayTopic(topic){
  $("#putQuestionsHere").append('<h1 style="padding: 0;">' + topic + '</h1><hr');
}

var question="";
function getPractice(topic) {

  $.getJSON("../data_science.json", function (data) {
    // var question = "";
    if (topic === "Data Science") {
      data = data.dataScience;
    } else if (topic === "Database Management System") {
      data = data.DBMS;
    }
    else if (topic === "Computer Graphics") {
      data = data.computerGraphics;
    }
    else if (topic === "Computer Architecture and Organization") {
      data = data.CAO;
    }
    else {
      data = data.dataScience;
    }

    // ITERATING THROUGH OBJECTS
    var index = 1;
    $.each(data, function (key, value) {
      question += "<p><b>" + index + ". " + value.Question + "</b></p>";
      question += "<p>1) " + value.OptionA + "</p>";
      question += "<p>2) " + value.OptionB + "</p>";
      question += "<p>3) " + value.OptionC + "</p>";
      question += "<p>4) " + value.OptionD + "</p>";
      var id = topic + key;
      question +=
        '<button id="' +
        id +
        '" onclick="viewAnswer(' +
        key +
        ')">View Answer</button>';

      question += '<div class="' + key + '" style="display:none"> <b>Solution: ' + value.Answer + '</b></div>';
      question += '<div class="' + key + '"style="display:none"> Explanation: ' + value.Explanation + '</div>';
      question += "<hr>";
      index = index + 1;
    });

    // $("#putQuestionsHere").append(question);
  });
  return question;
}

function displayQuestions(questions){
  $("#putQuestionsHere").append(questions);
}

 function viewAnswer(key) {
  console.log("Button Pressed: " + key);
  var ans = document.getElementsByClassName(key);
  // console.log(ans);
  for (let index = 0; index < ans.length; index++) {
    if (ans[index].style.display === "none") {
      ans[index].style.display = "block";
    } else {
      ans[index].style.display = "none";
    }
  }
}

module.exports = {
  getDomain,
  question,
  getPractice
};