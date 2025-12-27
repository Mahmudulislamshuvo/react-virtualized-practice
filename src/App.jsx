import ListContainer from "./components/ListContainer";
import ListItem from "./components/ListItem";
import { List, AutoSizer } from "react-virtualized";

function App() {
  const rowCount = 900000;

  const mockData = Array(rowCount)
    .fill()
    .map((_, index) => ({
      id: index + 1,
      name: `Employee ${index + 1}`,
      position: `Position ${(index % 10) + 1}`,
      department: `Department ${(index % 5) + 1}`,
      avatar: `https://i.pravatar.cc/150?img=${(index % 70) + 1}`,
      status: index % 2 === 0 ? "Active" : "Inactive",
    }));

  const rowHeight = 80; // Fixed height for each row
  // const width = 750; // Width of the list
  // const height = 600; // Height of the list container

  // TODO: Perameter gave us 3 things index, key, style
  const rowRenderer = ({ index, key, style }) => {
    const item = mockData[index];

    return (
      <div key={key} style={style}>
        <ListItem item={item} />
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4">
      <ListContainer title="Employee Directory">
        {/* 
         // TODO: Implement your virtualization logic and data fetching here. 
          Components available:
          - <ListItem item={object} /> 
          - <SkeletonRow />
        */}
        {/*//TODO:  It takes 4 parameters   height, width, rowCount, rowHeight and a function where jsx  and others rowRenderer*/}
        <AutoSizer>
          {({ height, width }) => (
            <List
              height={height}
              width={width}
              rowCount={rowCount}
              rowHeight={rowHeight}
              rowRenderer={rowRenderer}
              overscanColumnCount={5}
            />
          )}
        </AutoSizer>
      </ListContainer>

      <div className="max-w-3xl mx-auto text-center text-slate-400 text-xs mt-8">
        <p>React Virtualization Practice Project</p>
      </div>
    </div>
  );
}

export default App;
