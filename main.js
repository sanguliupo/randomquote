function newquote() {
	let randomNumber = Math.floor(Math.random() * quotes.length);
	let getQuotebox = document.querySelector('.quotebox');
	getQuotebox.innerHTML = quotes[randomNumber];
}

var quotes = [
	'Be kind, for everyone you meet is fighting a hard battle. --Ian MacLaren',

	'Failure is only the opportunity to begin again, this time more intelligently.',

	'A failure is not always a mistake. It may simply be the best one can do under the circumstances. The real mistake is to stop trying. --B.F. Skinner',

	"What if I told you that 10 years from now, your life would be exactly the same? I doubt you'd be happy. So, why are you so afraid of change? --Karen Salmansohn",

	'As I look back on my life, I realize that every time I thought I was being rejected from something good, I was actually being redirected to something better. --Dr. Steve Maraboli',

	"I don't know the key to success, but the key to failure is trying to please everybody. --Bill Cosby",

	'You cannot swim for new horizons until you have courage to lose sight of the shore. --William Faulkner',

	"Everyone has talent. What's rare is the courage to follow it to the dark places where it leads. --Erica Jong",

	"For what it's worth: it's never too late or, in my case, too early to be whoever you want to be. There's no time limit, stop whenever you want. You can change or stay the same, there are no rules to this thing. We can make the best or the worst of it. I hope you make the best of it. And I hope you see things that startle you. I hope you feel things you never felt before. I hope you meet people with a different point of view. I hope you live a life you're proud of. If you find that you're not, I hope you have the courage to start all over again. -- Eric Roth, The Curious Case of Benjamin Button Screenplay",

	'All happiness depends on courage and work. -- Honore de Balzac'
];
