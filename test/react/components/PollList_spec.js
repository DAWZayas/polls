import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import {expect} from 'chai';

import PollList from '../../../src/components/PollList';
import polls from '../../../src/utils/examples';
import init from '../../../src/utils/init';
import { addPoll } from '../../../src/actions';

const {renderIntoDocument, scryRenderedDOMComponentsWithClass, findRenderedDOMComponentWithTag, Simulate}  = TestUtils;

describe('PollList tests', () => {

  it('renders default empty polls prop into PollList component', () => {

    const component = renderIntoDocument(
      <PollList onAddPullClick={ () => false }/>
    );

    const pollList = scryRenderedDOMComponentsWithClass(component, 'list-group');
    const children = pollList[0].textContent;

    expect(pollList.length).to.equal(1);
    expect(children).to.be.empty;
  });

  it('renders polls prop into PollList component', () => {

    const component = renderIntoDocument(
      <PollList polls={polls} onAddPullClick={ () => false }/>
    );

    const pollList = scryRenderedDOMComponentsWithClass(component, 'list-group');
    const pollItems = scryRenderedDOMComponentsWithClass(component, 'list-group-item');
    
    expect(pollList.length).to.equal(1);
    expect(pollItems.length).to.equal(polls.length);

    polls.forEach( (poll, index)  => {
    	expect(poll.title).to.equal(pollItems[index].textContent);
    });
  });

  it('should execute a callback when add poll button is clicked', () => {
    let called = false;
    const component = renderIntoDocument(
      <PollList polls={polls} onAddPullClick={ () => called = true}/>
    );

    const addPullButton = findRenderedDOMComponentWithTag(component, 'button');
    Simulate.click(addPullButton);

    expect(called).to.be.ok;
  });

it('should obtain the poll title when add poll button is clicked', () => {
    
    const expectedTitle = 'TV Series';
    let obtainedTitle = null;

    const component = renderIntoDocument(
      <PollList polls={polls} onAddPullClick={ title => obtainedTitle = title }/>
    );

    ReactDOM.findDOMNode(component.refs.title).value = expectedTitle;

    const addPullButton = findRenderedDOMComponentWithTag(component, 'button');
    
    Simulate.click(addPullButton);
    
    expect(obtainedTitle).to.equal(expectedTitle);
  });

  it('should add the poll title to the store when add poll button is clicked', () => {
    
    const store = init();
    const initPolls = store.getState().polls;
    const expectedTitle = 'TV Series';

    const component = renderIntoDocument(
      <PollList polls={polls} onAddPullClick={ title => store.dispatch(addPoll(title)) }/>
    );

    ReactDOM.findDOMNode(component.refs.title).value = expectedTitle;

    const addPullButton = findRenderedDOMComponentWithTag(component, 'button');
    
    Simulate.click(addPullButton);

    const actualPolls = store.getState().polls;

    expect(initPolls.length).to.equal(actualPolls.length - 1, 'polls should inc by 1');
    expect(actualPolls[initPolls.length].title).to.equal(expectedTitle, 'The poll is added to the end');
    expect(actualPolls[initPolls.length].entries).to.be.empty;
  });

});

