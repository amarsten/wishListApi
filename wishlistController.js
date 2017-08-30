const query = require("./query")

exports.getWishlist = function(req, res){
	if (typeof req.params.userId !== 'undefined'){
		var id = req.params.userId,
		    type = 'wishlist';
		query.send('SELECT * from items where user_id = ? AND type = ?', [id, type], res);
	}
	else{
		response = []
		response.push({'result' : 'error', 'msg' : 'Please fill required details'});
		res.setHeader('Content-Type', 'application/json');
    	res.status(200).send(JSON.stringify(response));
	}

}

exports.addToWishlist = function(req, res){
    var response = [];
 
	if (
		typeof req.body.userId !== 'undefined' && 
		typeof req.body.productId !== 'undefined' && 
		typeof req.body.quantity !== 'undefined'  
	) {
		var userId = req.body.userId, 
	        productId = req.body.productId, 
	        quantity = req.body.quantity
	        type = 'wishlist';
 
		query.send('INSERT INTO items (user_id, product_id, quantity, type) VALUES (?, ?, ?, ?)', 
			[userId, productId, quantity, type], res);
	}
	else {
		response.push({'result' : 'error', 'msg' : 'Please fill required details'});
		res.setHeader('Content-Type', 'application/json');
    	res.status(200).send(JSON.stringify(response));
	}
}

exports.deleteWishlistItem = function(req, res){
	var response = [];
 
	if (typeof req.body.itemId !== 'undefined') {
		var itemId = req.body.itemId;

		query.send('DELETE FROM items WHERE item_id = ?', [itemId], res);
 
	} 
	else {
		response.push({'result' : 'error', 'msg' : 'Please fill required details'});
		res.setHeader('Content-Type', 'application/json');
    	res.status(200).send(JSON.stringify(response));
	}
	
}

exports.updateWishlistItemQuantity = function(req, res){
	var response = [];
 
	if (
		typeof req.body.itemId !== 'undefined' && 
		typeof req.body.quantity !== 'undefined'  
	) {
		var itemId = req.body.itemId, 
	        quantity = req.body.quantity;
 
		query.send('UPDATE items SET quantity = ? WHERE item_id = ?', [quantity, itemId], res);
			
	} 
	else {
		response.push({'result' : 'error', 'msg' : 'Please fill required details'});
		res.setHeader('Content-Type', 'application/json');
    	res.status(200).send(JSON.stringify(response));
	}
}

exports.addToCart = function(req, res){
	var response = [];
 
	if (
		typeof req.body.itemId !== 'undefined' 
	) {
		var itemId = req.body.itemId, 
	        type = 'cart';
 
		query.send('UPDATE items SET type = ? WHERE item_id = ?', [type, itemId], res); 
 
	} else {
		response.push({'result' : 'error', 'msg' : 'Please fill required details'});
		res.setHeader('Content-Type', 'application/json');
    	res.status(200).send(JSON.stringify(response));
	}
}