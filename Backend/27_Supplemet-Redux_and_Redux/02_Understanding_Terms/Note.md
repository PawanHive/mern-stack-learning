# #2: Understanding Terms

**Store**:  
A centralized store holds the whole state tree of your application. *(it is basically a JS OBJECT)*

**Reducers**:   
Functions that take the current state and an action as arguments, and return a new state result. In other workds, (state, action) => newState.

**Action**:  
It is a plain JavaScript object that has a type field. (like events)

**Slice**:  
Collection of Redux reducer logic and actions for a single feature together in a single file.