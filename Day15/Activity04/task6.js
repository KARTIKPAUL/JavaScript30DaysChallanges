function itemStore(){
    let items = [];
    return {
        //Add Item
        addItem: function(item){
            items.push(item)
        },

        //Remove Item
        removeItem: function(item){
            const idx = items.indexOf(item);
            if(idx >= 0){
                items.splice(idx,1);
            }
        },

        listItems: function(){
            return items.slice();
        }
    }
}

let mainItem = itemStore();
mainItem.addItem('Kartik');
mainItem.addItem('Amal');
mainItem.addItem('Ashim');

console.log(mainItem.listItems());

mainItem.removeItem('Ashim');
console.log(mainItem.listItems());
