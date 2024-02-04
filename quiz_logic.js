let index = 0;
let options = false;
let correct=0;
const quizData = [
    {
        question: 'When was Chandrayaan 3 spacecraft launched ?',
        options: ['14 July 2023','14 August 2023', '15 August 2023','24 August 2023'],
        correctOption: 'a'
    },
    {
        question: 'Chandrayaan 3 was launched from which launch pad ?',
        options: ['Thumba Equatorial Rocket Launch','Satish Dhawan Space Centre','Dr Abdul Kalam Island', 'Vikram Sarabhai Space Centre','Agnikul Cosmos'],
        correctOption: 'b'
    },
    {
        question: 'How many days it took to reach moon ?',
        options: ['14','40','41', '31'],
        correctOption: 'b'
    },
    {
        question: 'What is the mission life of Pragyaan rover ?',
        options: ['24 Hours','14 Lunar Day', '1 Earth Day','A Fortnight'],
        correctOption: 'd'
    },
    {
        question: 'Who was the Project Director of the mission ?',
        options: ['S Somanath','Dr P Veeramuthuvel', 'Mohana Kumar','M Sankaran'],
        correctOption: 'b'
    },
    {
        question: 'How many years it took to complete the project ?',
        options: ['4 years','6 months', '40 days','3 years'],
        correctOption: 'a'
    },
    {
        question: 'What was the total cost of the project ?',
        options: ['750 crores','600 crores', '700 crores','615 crores'],
        correctOption: 'd'
    },
    {
        question: 'What name is given to the Chandrayaan 3 landing spot ?',
        options: ['Indira Point','Shiv Shakti Point', 'Kalam Vihar','Jawahar Point'],
        correctOption: 'b'
    },
    {
        question: 'Which launcher is used for Chandrayaan-3 ?',
        options: ['LVM3-M4','PSLV', 'GSLV MK2','GEO-23'],
        correctOption: 'a'
    },
    {
        question: 'August 23 will be celebrated as ...',
        options: ['ISRO Day','Chandrayaan Day', 'National Science Day','National Space Day'],
        correctOption: 'd'
    }];

document.addEventListener("DOMContentLoaded", function (){
    const q = document.getElementById('q');
    const a =document.getElementById('a').getElementsByClassName('text')[0];
    const b =document.getElementById('b').getElementsByClassName('text')[0];
    const c =document.getElementById('c').getElementsByClassName('text')[0];
    const d =document.getElementById('d').getElementsByClassName('text')[0];
    q.innerHTML = quizData[index].question;
    a.innerHTML = quizData[index].options[0];
    b.innerHTML = quizData[index].options[1];
    c.innerHTML = quizData[index].options[2];
    d.innerHTML = quizData[index].options[3];
});

function end(){
    document.getElementById('main').style.visibility = 'hidden';
    document.getElementById('end').style.visibility = 'visible';
    document.getElementById('score').innerHTML = correct;
}

function share(){
    document.getElementById('share').style.boxShadow = ' inset 8px 10px 10px 0px #5a5a5a, inset -7px -7px 14px #ffffff';
    setTimeout(function(){
        document.getElementById('share').style.boxShadow = '8px 10px 10px 0px #5a5a5a, -7px -7px 14px #ffffff';
    },150)
    var message = encodeURIComponent(`I got ${correct} out of 10 questions right 🎉 !!! Check it out.`);
    var url = encodeURIComponent(window.location.href);
    var link = `whatsapp://send?text=${message}%20${url}`;
    window.location.href = link;
}

function clicked(id){
    if(!options){
        const elem = document.getElementById(id);
        elem.style.boxShadow = 'inset 8px 10px 10px 0px #5a5a5a, inset -7px -7px 14px #ffffff';
        setTimeout(function() {
        elem.style.boxShadow = '8px 10px 10px 0px #5a5a5a, -7px -7px 14px #ffffff';
        }, 150);
        
        if(id === quizData[index].correctOption){
            elem.style.backgroundColor = '#30ff30';
            correct = correct + 1; 
            document.getElementById('message').innerHTML = 'Congratulations ! You got it right 🎉';
            document.getElementById('confetti').style.visibility = 'visible';
        }
        else{
            elem.style.backgroundColor = '#ff3131';
            document.getElementById(quizData[index].correctOption).style.backgroundColor = '#30ff30';
            document.getElementById('message').innerHTML = 'Oops ! It\'s wrong';
        }
        options =true;
        setTimeout(function() {
            reset(id);
            next();
            options = false;
        }, 3000); 
    }
}

    function reset(id){
        document.getElementById(id).style.backgroundColor = '#e0e0e0';
        document.getElementById(quizData[index].correctOption).style.backgroundColor = '#e0e0e0';
        index = index + 1;
        document.getElementById('message').innerHTML = '';
        document.getElementById('confetti').style.visibility = 'hidden';
    }
    function next(){
        if(index <= 9){
            const q = document.getElementById('q');
            const a =document.getElementById('a').getElementsByClassName('text')[0];
            const b =document.getElementById('b').getElementsByClassName('text')[0];
            const c =document.getElementById('c').getElementsByClassName('text')[0];
            const d =document.getElementById('d').getElementsByClassName('text')[0];
            q.innerHTML = quizData[index].question;
            a.innerHTML = quizData[index].options[0];
            b.innerHTML = quizData[index].options[1];
            c.innerHTML = quizData[index].options[2];
            d.innerHTML = quizData[index].options[3];
        }
        else{
            end();
        }

    }