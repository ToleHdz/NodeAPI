/*exports.completeName = () =>
{
	return "Jose Alberto Tolentino"
};*/



exports.data = 
{
	name : "Jose Alberto",
	lastName : "Tolentino",
	completeName : function()
	{
		return this.name + ' ' + this.lastName; 
	}
};