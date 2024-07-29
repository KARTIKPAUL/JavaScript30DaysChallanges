//task 09
class Graph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1,vertex2){
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1);
        }
    }

    bfs(firstVertex){
        const q = [firstVertex];
        const result = [];
        const visited = {};
        visited[firstVertex] = true;

        while(q.length){
            const currVertex = q.shift();
            result.push(currVertex);

            this.adjacencyList[currVertex].forEach((element) => {
                if(!visited[element]){
                    visited[element] = true;
                    q.push(element);
                }
              }); 
            }
            return result;
    }
}

const graph = new Graph();
graph.addVertex("1");
graph.addVertex("2");
graph.addVertex("3");
graph.addVertex("4");
graph.addVertex("5");

graph.addEdge("1","2");
graph.addEdge("2","3");
graph.addEdge("2","4");
graph.addEdge("3","4");
graph.addEdge("4","5");

console.log(`BFS is : ${graph.bfs("1")}`);



//task 10
function bfsShortPath(st,end){
    const q = [[st]];
    const visited = new Set();

    while(q.length){
        const path = q.shift();
        const v = path[path.length -1];

        if(!visited.has(v)){
            const neighbors = graph.adjacencyList[v];

            for(const element of neighbors){
                const newPath = [...path,element];
                q.push(newPath);

                if(element === end){
                    return newPath;
                }
            }
            visited.add(v);
        }
    }
    return null;
}

console.log(`Shortest Path of A to E is : ${bfsShortPath("1","5")}`);


