const Questions = [
    {
        q:"What will be the value of result?",
        code: 
`const obj = Object.assign(
    {name: "JavaScript"},
    {name: "ECMAScript"}, 
    {name: "LiveScript"}
);
const result = obj.name;`,  
        answers: [
            {text:"ECMAScript",correct:false},
            {text:"LiveScript",correct:true},
            {text:"JavaScript",correct:false},
            {text:"undefined",correct:false}
        ]
    },
    {
        q:"What is the value of result?",
        code:
 `const o = {
    name: "Brendan"
 };
 const s = JSON.parse(JSON.stringify(o))
 const result = s === o`,
        answers: [
            {text:"false",correct:true},
            {text:"true",correct:false},
            {text:"undefined",correct:false},
            {text:"syntax error",correct:false}
        ]
    },
    {
        q:"What is the value of result?",
        code:`const result = "2009" - "1995"`,
        answers: [
            {text:"NaN",correct:false},
            {text:"TypeError",correct:false},
            {text:"null",correct:false},
            {text:"14",correct:true}
        ]
    },
    {
        q:"What is the value of result?",
        code:
 `const func = function (a, b) {
return arguments.length;
}
const result = func(4, 3, 2, 1);`,
        answers: [
            {text:"0",correct:false},
            {text:"2",correct:false},
            {text:"undefined",correct:false},
            {text:"4",correct:true}
        ]
    },
    {
        q:"What is the value of result?",
        code:
 `let value = 95;
const result = value++;`,
        answers: [
            {text:"96",correct:false},
            {text:"95",correct:true},
            {text:"97",correct:false},
            {text:"-95",correct:false}
        ]
    }
]
export default Questions