var names=new Array();
names[0]="Mokshit";
names[1]="James";
names[2]="Jatin";
names[3]="Parul";
names[4]="Jitendra";
names[5]="Shruti";
names[6]="Koyana";
names[7]="Nilesh";
names[8]="Rupesh";
names[9]="John";

for (var i = 0; i < names.length; i++) 
{
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j')
    {
        console.log("Goodbye "+ names[i])
	}
	else
    {
		console.log("Hello "+ names[i])
	}
}