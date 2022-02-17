import * as reactRedux from 'react-redux'

describe('test suite',() => {
   
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')
    const useDispatchMock = jest.spyOn(reactRedux,'useDispatch')

    beforeEach(() => {
        useSelectorMock.mockClear()
        useDispatchMock.mockClear()
      })
  
      test('does something', () => {
      
        const dummyDispatch = jest.fn();
        useDispatchMock.mockReturnValue(dummyDispatch)
        expect(dummyDispatch).not.toHaveBeenCalled();
      })

      test('does something', () => {
        const dummyState = jest.fn();
        useSelectorMock.mockReturnValue(dummyState);
        
      })
    
})