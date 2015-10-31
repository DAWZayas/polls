export default function sequencer(actionCreators, onCatch = (_ => _), init) {
  if (actionCreators.length === 0) {
    return init;
  }
  const result = actionCreators[0](init);
    return result instanceof Promise ?
	  result.then(() => sequencer(actionCreators.slice(1), result), onCatch) : 
	  sequencer(actionCreators.slice(1), result);
}