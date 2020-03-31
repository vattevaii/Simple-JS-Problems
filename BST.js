class Node {
	constructor(value){
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BST {
	constructor(value){
		this.root = null;
	}

	add(value){
		const newNode = new Node(value);

		//if there is no node in BST
		if(this.root == null){
			this.root = newNode;
		}
		else {
			this._add(this.root, newNode);
		}
	}

	//recursive function to add a newNode below node
	_add(node, newNode){
		//if the value in newNode is less than the current node's value
		if(newNode.value < node.value){
			//see if left is null
			if(node.left == null){
				node.left = newNode;
			}
			else {
				this._add(node.left, newNode);
			}
		}
		//if the value in newNode is more than the current node's value
		else {
			//see if right is null
			if(node.right == null){
				node.right = newNode;
			}
			else {
				this._add(node.right, newNode);
			}

		}
	}
	// Enter code below
    pre_order(){
        let stack = [this.root];
        while(stack.length>0){
            let el = stack.pop();
            console.log(el.value);
            if(el.right)stack.push(el.right);
            if(el.left)stack.push(el.left);
        }
    }
    in_order(){
        let stack = [this.root];
        while(stack.length>0){
            let el = stack.pop();
            //console.log(typeof el);
            if(typeof(el) == "object"){
                if(el.right)stack.push(el.right);
                stack.push(el.value);
                if(el.left)stack.push(el.left);
            }
            else console.log(el);
        }
    }
    post_order(){
        let stack = [this.root];
        while(stack.length>0){
            let el = stack.pop();
            //console.log(typeof el);
            if(typeof(el) == "object"){
                stack.push(el.value);
                if(el.right)stack.push(el.right);
                if(el.left)stack.push(el.left);
            }
            else console.log(el);
        }
    }

}

let bst = new BST();

bst.add(5);
bst.add(3);
bst.add(7);
bst.add(1);
bst.add(4);
bst.add(10);