import "mocha";
import { expect } from "chai";
import Stack from "../../../src/js/data-structures/stack-symbol";

describe(`Stack`, () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it(`starts empty`, () => {
    expect(stack.size()).to.equal(0);
    expect(stack.isEmpty()).to.equal(true);
  });

  it(`implements LIFO logic`, () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.pop()).to.equal(3);
    expect(stack.pop()).to.equal(2);
    expect(stack.pop()).to.equal(1);
    expect(stack.pop()).to.equal(undefined);
  });

  describe(`Push`, () => {
    it(`add elements`, () => {
      stack.push(1);
      expect(stack.size()).to.equal(1);
      expect(stack.isEmpty()).to.equal(false);
      expect(stack.peek()).to.equal(1);
      stack.push(2);
      expect(stack.size()).to.equal(2);
      expect(stack.isEmpty()).to.equal(false);
      expect(stack.peek()).to.equal(2);
      stack.push(3);
      expect(stack.size()).to.equal(3);
      expect(stack.isEmpty()).to.equal(false);
      expect(stack.peek()).to.equal(3);
    });
  });

  describe(`Pop`, () => {
    it(`return the removed element`, () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);

      expect(stack.pop()).to.equal(3);
      expect(stack.peek()).to.equal(2);
    });

    it(`return undefined if the stack is empty`, () => {
      expect(stack.isEmpty()).to.equal(true);
      expect(stack.pop()).to.equal(undefined);
    });
  });

  describe(`Peek`, () => {
    it(`return the last element`, () => {
      stack.push(1);
      expect(stack.peek()).to.equal(1);

      stack.push(2);
      expect(stack.peek()).to.equal(2);
    });

    it(`return undefined if the stack is empty`, () => {
      expect(stack.peek()).to.equal(undefined);
    });
  });

  describe(`Clear`, () => {
    it(`clear stack`, () => {
      stack.push(1);
      stack.push(2);

      expect(stack.isEmpty()).to.equal(false);
      expect(stack.clear()).to.equal(1);
      expect(stack.isEmpty()).to.equal(true);
    });

    it(`clear stack with stack being empty`, () => {
      expect(stack.isEmpty()).to.equal(true);
      expect(stack.clear()).to.equal(0);
    });
  });

  describe(`Size`, () => {
    it(`returns the correct size`, () => {
      expect(stack.isEmpty()).to.equal(true);
      expect(stack.size()).to.equal(0);

      stack.push(1);
      expect(stack.isEmpty()).to.equal(false);
      expect(stack.size()).to.equal(1);

      stack.push(2);
      expect(stack.isEmpty()).to.equal(false);
      expect(stack.size()).to.equal(2);
    });
  });

  describe(`List`, () => {
    it(`return full stack`, () => {
      expect(stack.list()).to.deep.equal({});

      stack.push(1);
      expect(stack.list()).to.deep.equal({ 0: 1 });

      stack.push(2);
      expect(stack.list()).to.deep.equal({ 0: 1, 1: 2 });

      stack.push(3);
      expect(stack.list()).to.deep.equal({ 0: 1, 1: 2, 2: 3 });
    });
  });

  it(`return empty stack if it has no elements`, () => {
    expect(stack.list()).to.deep.equal({});
  });

  describe(`toString`, () => {
    describe(`return a filled string`, () => {
      it(`should return a string with the first element only`, () => {
        stack.push(1);

        expect(stack.toString()).to.equal(`1`);
      });

      it(`should return a string with the first and second element concatenated`, () => {
        stack.push(1);
        stack.push(2);

        expect(stack.toString()).to.equal(`1,2`);
      });
    });

    it(`return an empty string if there is no element`, () => {
      expect(stack.toString()).to.equal(``);
    });
  });
});
