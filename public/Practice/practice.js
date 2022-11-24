function getPractice(id) {
  console.log("Button Pressed: " + id);
  $("#putQuestionsHere").empty();

  $.getJSON("../data_science.json", function (data) {
    var question = "";
    var topic;

    if (id === "DS") {
      data = data.dataScience;
      topic = "Data Science";
    } else if (id === "DBMS") {
      data = data.DBMS;
      topic = "Database Management System";
    }
    else if (id === "CG") {
      data = data.computerGraphics;
      topic = "Computer Graphics";
    }
    else if (id === "CAO") {
      data = data.CAO;
      topic = "Computer Architecture and Organization";
    }
    else {
      data = data.dataScience;
      topic = "ELSE Executed";
    }

    $("#putQuestionsHere").append('<h1 style="padding: 0;">' + topic + '</h1>');
    question += "<hr>";
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

      // student += '<input type="submit" name="signin" id="signin" class="form-submit" value="View Answer"/>';
      question += '<div class="' + key + '" style="display:none"> <b>Solution: ' + value.Answer + '</b></div>';
      question += '<div class="' + key + '"style="display:none"> Explanation: ' + value.Explanation + '</div>';
      question += "<hr>";
      index = index + 1;
    });

    $("#putQuestionsHere").append(question);
  });
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
