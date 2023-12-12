const makeChange = (c) => {
  // your name here
	let q=25,d=10,n=5,p=1;
	let obj = {
		q:0,
		d:0,
		n:0,
		p:0
	}

	while (c>0) {
		let rem = 0;
		if(c>q){
			rem = parseInt(c/q);
			obj.q=rem;
			c=c-(q*rem);
		}
		else if(c>d){
			rem = parseInt(c/d);
			obj.d=rem;
			c=c-(d*rem);
		}
		else if(c>n){
			rem = parseInt(c/n);
			obj.n=rem;
			c=c-(n*rem);
		}
		else if(c>p){
			rem = parseInt(c/p);
			obj.p=rem;
			c=c-(p*rem);
		}
	}
	return obj;
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
