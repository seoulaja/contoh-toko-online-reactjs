var _router;
module.exports = {
	set(router){
		_router = router;
	},
	get(){
		return _router;
	}
}