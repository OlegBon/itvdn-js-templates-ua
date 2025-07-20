const namespace1 = {
  myFunction: () => {
    console.log("Function from namespace1");
  },
};

const namespace2 = {
  myFunction: () => {
    console.log("Function from namespace2");
  },
};

namespace1.myFunction();
namespace2.myFunction();
