const questions = [
    {
        QuestionId: "1001",
        question: "Which of the following would be more appropriate to be replaced with question mark in the following figure?",
        optionA: "Data Analysis",
        optionB: "Data Science",
        optionC: "Descriptive Analytics",
        optionD: "None of the mentioned",
        correctOption: "optionB",
        Explanation: "Data Science is a multidisciplinary which involves extraction of knowledge from large volumes of data that are structured or unstructured."
    },
    {
        QuestionId: "1002",
        question: "Point out the correct statement.",
        optionA: "Raw data is original source of data",
        optionB: "Preprocessed data is original source of data",
        optionC: "Raw data is the data obtained after processing steps",
        optionD: "None of the mentioned",
        correctOption: "optionA",
        Explanation: "Accounting programs are prototypical examples of data processing applications."
    },
    {
        QuestionId: "1003",
        question: "Which of the following is performed by Data Scientist?",
        optionA: "Define the question",
        optionB: "Create reproducible code",
        optionC: "Challenge results",
        optionD: "All of the mentioned",
        correctOption: "optionD",
        Explanation: "A data scientist is a job title for an employee or business intelligence (BI) consultant who excels at analyzing data, particularly large amounts of data."
    },
    {
        QuestionId: "1004",
        question: "Which of the following is the most important language for Data Science?",
        optionA: "Java",
        optionB: "Ruby",
        optionC: "R",
        optionD: "None of the mentioned",
        correctOption: "optionC",
        Explanation: "R is free software for statistical computing and analysis."
    },
    {
        QuestionId: "1005",
        question: "Point out the wrong statement.",
        optionA: "Merging concerns combining datasets on the same observations to produce a result with more variables",
        optionB: "Data visualization is the organization of information according to preset specifications",
        optionC: "Subsetting can be used to select and exclude variables and observations",
        optionD: "All of the mentioned",
        correctOption: "optionB",
        Explanation: "Data formatting is the organization of information according to preset specifications."
    },
    {
        QuestionId: "1006",
        question: "Which of the following approach should be used to ask Data Analysis question?",
        optionA: "Find only one solution for particular problem",
        optionB: "Find out the question which is to be answered",
        optionC: "Find out correctOption from dataset without asking question",
        optionD: "None of the mentioned",
        correctOption: "optionB",
        Explanation: "Data analysis has multiple facets and approaches."
    },
    {
        QuestionId: "1007",
        question: "Which of the following is one of the key data science skills?",
        optionA: "Statistics",
        optionB: "Machine Learning",
        optionC: "Data Visualization",
        optionD: "All of the mentioned",
        correctOption: "optionD",
        Explanation: "Data visualization is the presentation of data in a pictorial or graphical format."
    },
    {
        QuestionId: "1008",
        question: "Which of the following is a key characteristic of a hacker?",
        optionA: "Afraid to say they don�t know the correctOption",
        optionB: "Willing to find answers on their own",
        optionC: "Not Willing to find answers on their own",
        optionD: "All of the mentioned",
        correctOption: "optionB",
        Explanation: "Hacker is an expert at programming and solving problems with a computer."
    },
    {
        QuestionId: "1009",
        question: "Which of the following is characteristic of Processed Data?",
        optionA: "Data is not ready for analysis",
        optionB: "All steps should be noted",
        optionC: "Hard to use for data analysis",
        optionD: "None of the mentioned",
        correctOption: "optionB",
        Explanation: "Processing includes merging, summarizing and subsetting data."
    },
    {
        QuestionId: "1010",
        question: "Which of the following would be more appropriate to be replaced with question mark in the following figure?",
        optionA: "Data Analysis",
        optionB: "Data Science",
        optionC: "Descriptive Analytics",
        optionD: "None of the mentioned",
        correctOption: "optionB",
        Explanation: "Data Science is a multidisciplinary which involves extraction of knowledge from large volumes of data that are structured or unstructured."
    },
    {
        QuestionId: "1011",
        question: "Point out the correct statement.",
        optionA: "Raw data is original source of data",
        optionB: "Preprocessed data is original source of data",
        optionC: "Raw data is the data obtained after processing steps",
        optionD: "None of the mentioned",
        correctOption: "optionA",
        Explanation: "Accounting programs are prototypical examples of data processing applications."
    },
    {
        QuestionId: "1012",
        question: "Which of the following is performed by Data Scientist?",
        optionA: "Define the question",
        optionB: "Create reproducible code",
        optionC: "Challenge results",
        optionD: "All of the mentioned",
        correctOption: "optionD",
        Explanation: "A data scientist is a job title for an employee or business intelligence (BI) consultant who excels at analyzing data, particularly large amounts of data."
    },
    {
        QuestionId: "1013",
        question: "Which of the following is the most important language for Data Science?",
        optionA: "Java",
        optionB: "Ruby",
        optionC: "R",
        optionD: "None of the mentioned",
        correctOption: "optionC",
        Explanation: "R is free software for statistical computing and analysis."
    },
    {
        QuestionId: "1014",
        question: "Point out the wrong statement.",
        optionA: "Merging concerns combining datasets on the same observations to produce a result with more variables",
        optionB: "Data visualization is the organization of information according to preset specifications",
        optionC: "Subsetting can be used to select and exclude variables and observations",
        optionD: "All of the mentioned",
        correctOption: "optionB",
        Explanation: "Data formatting is the organization of information according to preset specifications."
    },
    {
        QuestionId: "1015",
        question: "Which of the following approach should be used to ask Data Analysis question?",
        optionA: "Find only one solution for particular problem",
        optionB: "Find out the question which is to be answered",
        optionC: "Find out correctOption from dataset without asking question",
        optionD: "None of the mentioned",
        correctOption: "optionB",
        Explanation: "Data analysis has multiple facets and approaches."
    },
    {
        QuestionId: "1016",
        question: "Which of the following is one of the key data science skills?",
        optionA: "Statistics",
        optionB: "Machine Learning",
        optionC: "Data Visualization",
        optionD: "All of the mentioned",
        correctOption: "optionD",
        Explanation: "Data visualization is the presentation of data in a pictorial or graphical format."
    },
    {
        QuestionId: "1017",
        question: "Which of the following is a key characteristic of a hacker?",
        optionA: "Afraid to say they don�t know the correctOption",
        optionB: "Willing to find answers on their own",
        optionC: "Not Willing to find answers on their own",
        optionD: "All of the mentioned",
        correctOption: "optionB",
        Explanation: "Hacker is an expert at programming and solving problems with a computer."
    },
    {
        QuestionId: "1018",
        question: "Which of the following is characteristic of Processed Data?",
        optionA: "Data is not ready for analysis",
        optionB: "All steps should be noted",
        optionC: "Hard to use for data analysis",
        optionD: "None of the mentioned",
        correctOption: "optionB",
        Explanation: "Processing includes merging, summarizing and subsetting data."
    },
    {
        QuestionId: "1019",
        question: "Which of the following operations are supported on Time Frames?",
        optionA: "idxmax",
        optionB: "ixmax",
        optionC: "ixmin",
        optionD: "none of the mentioned",
        correctOption: "optionA",
        Explanation: "Operands can also appear in a reversed order."
    },
    {
        QuestionId: "1020",
        question: "Point out the correct statement.",
        optionA: "Timedeltas are differences in times, expressed in difference units",
        optionB: "You can construct a Timedelta scalar through various argument",
        optionC: "DateOffsets cannot be used in construction",
        optionD: "All of the mentioned",
        correctOption: "optionA",
        Explanation: "Timedeltas can be both positive and negative."
    },
    {
        QuestionId: "1021",
        question: "Numeric reduction operation for timedelta64[ns] will return _________ objects.",
        optionA: "Timeseries",
        optionB: "Timeplus",
        optionC: "Timedelta",
        optionD: "None of the mentioned",
        correctOption: "optionC",
        Explanation: "NaT are skipped during evaluation."
    },
    {
        QuestionId: "1022",
        question: "Which of the following scalars can be converted to other �frequencies� by as typing to a specific timedelta type?",
        optionA: "Timedelta Series",
        optionB: "TimedeltaIndex",
        optionC: "Timedelta",
        optionD: "All of the mentioned",
        correctOption: "optionD",
        Explanation: "These operations yield Series and propagate NaT -> nan."
    },
    {
        QuestionId: "1023",
        question: "Point out the wrong statement.",
        optionA: "min, max, idxmin, idxmax operations are supported on Series",
        optionB: "You cannot pass a timedelta to get a particular value",
        optionC: "Division by the numpy scalar is true division",
        optionD: "None of the mentioned",
        correctOption: "optionB",
        Explanation: "Dividing or multiplying a timedelta64[ns] Series by an integer or integer Series yields another timedelta64[ns] dtypes Series."
    },
    {
        QuestionId: "1024",
        question: "Which of the following is used to generate an index with time delta?",
        optionA: "TimeIndex",
        optionB: "TimedeltaIndex",
        optionC: "LeadIndex",
        optionD: "None of the mentioned",
        correctOption: "optionB",
        Explanation: "Using TimedeltaIndex you can pass string-like, Timedelta, timedelta, or np.timedelta64 objects."
    },
    {
        QuestionId: "1025",
        question: "Which of the following principle is incorrectly represented in the below figure?",
        optionA: "Show Comparisons",
        optionB: "Integrate Evidence",
        optionC: "Describe Evidence",
        optionD: "None of the mentioned",
        correctOption: "optionD",
        Explanation: "Principles of Analytical graphs are sequentially shown in the stepwise manner."
    },
    {
        QuestionId: "1026",
        question: "Point out the correct statement.",
        optionA: "Least square is an estimation tool",
        optionB: "Least square problems falls in to three categories",
        optionC: "Compound least square is one of the category of least square",
        optionD: "None of the mentioned",
        correctOption: "optionA",
        Explanation: "The Method of Least Squares is a procedure to determine the best fit line to data."
    },
    {
        QuestionId: "1027",
        question: "How many principles of analytical graphs exist?",
        optionA: "3",
        optionB: "4",
        optionC: "6",
        optionD: "None of the mentioned",
        correctOption: "optionC",
        Explanation: "Six Principles of Analytical Graphs are useful for data analysis."
    },
    {
        QuestionId: "1028",
        question: "Which of the following is not a step in data analysis?",
        optionA: "Obtain the data",
        optionB: "Clean the data",
        optionC: "EDA",
        optionD: "None of the mentioned",
        correctOption: "optionD",
        Explanation: "EDA stands for Exploratory Data Analysis."
    },
    {
        QuestionId: "1029",
        question: "Point out the wrong statement.",
        optionA: "Simple linear regression is equipped to handle more than one predictor",
        optionB: "Compound linear regression is not equipped to handle more than one predictor",
        optionC: "Linear regression consists of finding the best-fitting straight line through the points",
        optionD: "All of the mentioned",
        correctOption: "optionA",
        Explanation: "Simple linear regression is equipped to handle more than one predictor."
    },
    {
        QuestionId: "1030",
        question: "Which of the following technique comes under practical machine learning?",
        optionA: "Bagging",
        optionB: "Boosting",
        optionC: "Forecasting",
        optionD: "None of the mentioned",
        correctOption: "optionB",
        Explanation: "Boosting is an approach to machine learning based on the idea of creating a highly accurate predictor."
    },
    {
        QuestionId: "1031",
        question: "Data Products shown in the below figure is built using which programming language?",
        optionA: "S",
        optionB: "Python",
        optionC: "R",
        optionD: "Java",
        correctOption: "optionC",
        Explanation: "Products mentioned in the figure are web application frameworks written in R."
    },
    {
        QuestionId: "1032",
        question: "Which of the following technique is also referred to as Bagging?",
        optionA: "Bootstrap aggregating",
        optionB: "Bootstrap subsetting",
        optionC: "Bootstrap predicting",
        optionD: "All of the mentioned",
        correctOption: "optionA",
        Explanation: "Bagging is used in statistical classification and regression."
    },
    {
        QuestionId: "1033",
        question: "Which of the following is characteristic of Raw Data?",
        optionA: "Data is ready for analysis",
        optionB: "Original version of data",
        optionC: "Easy to use for data analysis",
        optionD: "None of the mentioned",
        correctOption: "optionB",
        Explanation: "Raw data is data that has not been processed for use."
    },
    {
        QuestionId: "1034",
        question: "Which of the following CLI command can also be used to rename files?",
        optionA: "rm",
        optionB: "mv",
        optionC: "rm -r",
        optionD: "none of the mentioned",
        correctOption: "optionB",
        Explanation: "mv stands for move."
    },
    {
        QuestionId: "1035",
        question: "Point out the correct statement.",
        optionA: "CLI can help you to organize messages",
        optionB: "CLI can help you to organize files and folders",
        optionC: "Navigation of directory is possible using CLI",
        optionD: "None of the mentioned",
        correctOption: "optionB",
        Explanation: "CLI stands for Command Line Interface."
    },
    {
        QuestionId: "1036",
        question: "Which of the following command allows you to change directory to one level above your parent directory?",
        optionA: "cd",
        optionB: "cd.",
        optionC: "cd..",
        optionD: "none of the mentioned",
        correctOption: "optionC",
        Explanation: "cd stands for change directory."
    },
    {
        QuestionId: "1037",
        question: "Which of the following is not a CLI command?",
        optionA: "delete",
        optionB: "rm",
        optionC: "clear",
        optionD: "none of the mentioned",
        correctOption: "optionA",
        Explanation: "rm can be used to remove files and directories."
    },
    {
        QuestionId: "1038",
        question: "Point out the wrong statement.",
        optionA: "Command is the CLI command which does a specific task",
        optionB: "There is one and only flag for every command in CLI",
        optionC: "Flags are the options given to command for activating particular behaviour",
        optionD: "All of the mentioned",
        correctOption: "optionB",
        Explanation: "Depending on the command, there can be zero or more flags and arguments."
    },
    {
        QuestionId: "1039",
        question: "Which of the following systems record changes to a file over time?",
        optionA: "Record Control",
        optionB: "Version Control",
        optionC: "Forecast Control",
        optionD: "None of the mentioned",
        correctOption: "optionB",
        Explanation: "Version control is also known as revision control."
    },
    {
        QuestionId: "1040",
        question: "Which of the following is a revision control system?",
        optionA: "Git",
        optionB: "NumPy",
        optionC: "Slidify",
        optionD: "None of the mentioned",
        correctOption: "optionA",
        Explanation: "Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency."
    },
    {
        QuestionId: "1041",
        question: "Which of the following command line environment is used for interacting with Git?",
        optionA: "GitHub",
        optionB: "Git Bash",
        optionC: "Git Boot",
        optionD: "All of the mentioned",
        correctOption: "optionB",
        Explanation: "Git for Windows provides a BASH emulation used to run Git from the command line."
    },
    {
        QuestionId: "1042",
        question: "Which of the following web hosting service use Git control system?",
        optionA: "GitHub",
        optionB: "Open Hash",
        optionC: "Git Bash",
        optionD: "None of the mentioned",
        correctOption: "optionA",
        Explanation: "GitHub is a Web-based Git repository hosting service, which offers all of the distributed revision control and source code management (SCM) functionality of Git."
    },
    {
        QuestionId: "1043",
        question: "Which of the following adds all new files to local repository?",
        optionA: "git add .",
        optionB: "git add -u",
        optionC: "git add -A",
        optionD: "none of the mentioned",
        correctOption: "optionA",
        Explanation: "You should do this before committing."
    },
    {
        QuestionId: "1044",
        question: "Point out the correct statement.",
        optionA: "You don�t need GitHub to use Git",
        optionB: "CLI can help you to organize files and folders",
        optionC: "Navigation of directory is possible using CLI",
        optionD: "None of the mentioned",
        correctOption: "optionB",
        Explanation: "CLI stands for Command Line Interface."
    },
    {
        QuestionId: "1045",
        question: "Which of the following command updates tracking for files that are modified?",
        optionA: "git add .",
        optionB: "git add -u",
        optionC: "git add -A",
        optionD: "none of the mentioned",
        correctOption: "optionB",
        Explanation: "The git add command adds a change in the working directory to the staging area."
    },
    {
        QuestionId: "1046",
        question: "Which of the following command is used to give a message description?",
        optionA: "git command -m",
        optionB: "git command -d",
        optionC: "git command -message",
        optionD: "none of the mentioned",
        correctOption: "optionA",
        Explanation: "This only updates your local repository."
    },
    {
        QuestionId: "1047",
        question: "Point out the wrong statement.",
        optionA: "You need GitHub to use Git",
        optionB: "GitHub allows you to share repositories with others",
        optionC: "GitHub allows you to access others repositories",
        optionD: "All of the mentioned",
        correctOption: "optionA",
        Explanation: "GitHub can store a remote copy of your repository."
    },
    {
        QuestionId: "1048",
        question: "Which of the following command allows you to update the repository?",
        optionA: "push",
        optionB: "pop",
        optionC: "update",
        optionD: "none of the mentioned",
        correctOption: "optionA",
        Explanation: "The git branch command is your general-purpose branch administration tool."
    },
    {
        QuestionId: "1049",
        question: "Which of the following is the correct way of creating GitHub repository in to well labelled commits?",
        optionA: "Fork another user�s repository",
        optionB: "Pop another user�s repository",
        optionC: "Zip another user�s repository",
        optionD: "None of the mentioned",
        correctOption: "optionA",
        Explanation: "A fork is a copy of a repository."
    },
    {
        QuestionId: "1050",
        question: "Which of the following command is used to squash the commits?",
        optionA: "rebase",
        optionB: "squash",
        optionC: "boot",
        optionD: "all of the mentioned",
        correctOption: "optionA",
        Explanation: "In Git, there are two main ways to integrate changes from one branch into another: the merge and the rebase."
    },
    {
        QuestionId: "1051",
        question: "Which of the following statement would create branch named as �sanfoundry�?",
        optionA: "git checkout -b sanfoundry",
        optionB: "git checkout -c sanfoundry",
        optionC: "git check -b sanfoundry",
        optionD: "none of the mentioned",
        correctOption: "optionA",
        Explanation: "A branch in Git is simply a lightweight movable pointer to one of these commits."
    },
    {
        QuestionId: "1053",
        question: "Point out the correct statement.",
        optionA: "Machine learning focuses on prediction, based on known properties learned from the training data",
        optionB: "Data Cleaning focuses on prediction, based on known properties learned from the training data",
        optionC: "Representing data in a form which both mere mortals can understand and get valuable insights is as much a science as much as it is art",
        optionD: "None of the mentioned",
        correctOption: "optionD",
        Explanation: "Visualization is becoming a very important aspect."
    },
    {
        QuestionId: "1054",
        question: "Which of the following characteristic of big data is relatively more concerned to data science?",
        optionA: "Velocity",
        optionB: "Variety",
        optionC: "Volume",
        optionD: "None of the mentioned",
        correctOption: "optionB",
        Explanation: "Big data enables organizations to store, manage, and manipulate vast amounts of disparate data at the right speed and at the right time."
    },
    {
        QuestionId: "1055",
        question: "Which of the following analytical capabilities are provided by information management company?",
        optionA: "Stream Computing",
        optionB: "Content Management",
        optionC: "Information Integration",
        optionD: "All of the mentioned",
        correctOption: "optionD",
        Explanation: "With stream computing, store less, analyze more and make better decisions faster."
    },
    {
        QuestionId: "1056",
        question: "Point out the wrong statement.",
        optionA: "The big volume indeed represents Big Data",
        optionB: "The data growth and social media explosion have changed how we look at the data",
        optionC: "Big Data is just about lots of data",
        optionD: "All of the mentioned",
        correctOption: "optionC",
        Explanation: "Big Data is actually a concept providing an opportunity to find new insight into your existing data as well guidelines to capture and analysis your future data."
    },
    {
        QuestionId: "1057",
        question: "Which of the following step is performed by data scientist after acquiring the data?",
        optionA: "Data Cleansing",
        optionB: "Data Integration",
        optionC: "Data Replication",
        optionD: "All of the mentioned",
        correctOption: "optionA",
        Explanation: "Data cleansing, data cleaning or data scrubbing is the process of detecting and correcting (or removing) corrupt or inaccurate records from a record set, table, or database."
    },
    {
        QuestionId: "1058",
        question: "Which of the following design term is perfectly applicable to the below figure?",
        optionA: "Correlation",
        optionB: "Confounding",
        optionC: "Causation",
        optionD: "None of the mentioned",
        correctOption: "optionB",
        Explanation: "Confounding can be dealt with either at the study design stage, or at the analysis stage."
    },
    {
        QuestionId: "1059",
        question: "Point out the correct statement.",
        optionA: "If equations are known but the parameters are not, they may be inferred with data analysis",
        optionB: "If equations are not known but the parameters are, they may be inferred with data analysis",
        optionC: "If equations and parameter are not, they may be inferred with data analysis",
        optionD: "None of the mentioned",
        correctOption: "optionA",
        Explanation: "Usually the random component of data is measurement error."
    },
    {
        QuestionId: "1061",
        question: "Which of the following approach should be used if you can�t fix the variable?",
        optionA: "randomize it",
        optionB: "non stratify it",
        optionC: "generalize it",
        optionD: "none of the mentioned",
        correctOption: "optionA",
        Explanation: "If you can�t fix the variable, stratify it."
    },
    {
        QuestionId: "1062",
        question: "Point out the wrong statement.",
        optionA: "Randomized studies are not used to identify causation",
        optionB: "Complication approached exist for inferring causation",
        optionC: "Causal relationships may not apply to every individual",
        optionD: "All of the mentioned",
        correctOption: "optionA",
        Explanation: "Randomized studies are usually used to identify causation."
    },
    {
        QuestionId: "1063",
        question: "Which of the following is a good way of performing experiments in data science?",
        optionA: "Measure variability",
        optionB: "Generalize to the problem",
        optionC: "Have Replication",
        optionD: "All of the mentioned",
        correctOption: "optionD",
        Explanation: "Experiments on causal relationships investigate the effect of one or more variables on one or more outcome variables."
    },
    {
        QuestionId: "1064",
        question: "Which of the following is commonly referred to as �data fishing�?",
        optionA: "Data bagging",
        optionB: "Data booting",
        optionC: "Data merging",
        optionD: "None of the mentioned",
        correctOption: "optionD",
        Explanation: "Data dredging is sometimes referred to as �data fishing�."
    },
    {
        QuestionId: "1065",
        question: "Which of the following data mining technique is used to uncover patterns in data?",
        optionA: "Data bagging",
        optionB: "Data booting",
        optionC: "Data merging",
        optionD: "Data Dredging",
        correctOption: "optionD",
        Explanation: "Data dredging, also called as data snooping, refers to the practice of misusing data mining techniques to show misleading scientific �research�."
    }
]


let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
//app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
    console.log(shuffledQuestions)
}


let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ //adds 1 to wrong attempts 
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 9) {
//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}