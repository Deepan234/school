import { ActionTypes } from "../Action/ActionTypes";
import SchoolReducers from "./SchoolReducers"


describe('All Reducers',() =>{
   test('should return default state',()=>{
       const newState = SchoolReducers(undefined,{});
       expect(newState.school).toEqual([]);
   });

   test('should return getschools',()=>{
       const school = [{id:1,name:'ceo matric',about:'very good',affilation:'cbse'},{id:2,name:'sbo matric',about:'very good',affilation:'cbse'}];
       const newState = SchoolReducers(undefined,{
           type:ActionTypes.GET_SCHOOLS,
           payload:school
       })
       expect(newState.school).toEqual(school);
   })

    
   test('should return addSchools',()=>{
       const school = [{id:3,name:'seo matric',about:'very good',affilation:'cbse'}]
       const newState = SchoolReducers(undefined,{
        type:ActionTypes.ADD_SCHOOL,
        payload:school
    })
    expect(newState.school).toEqual(school);
   })

   test('should return getSchoolbyId',()=>{
       const school = {id:3,name:'seo matric',about:'very good',affilation:'cbse'}
       const newState = SchoolReducers(undefined,{
        type:ActionTypes.INDUIVAL_SCHOOLS,
        payload:school
    })
    expect(newState.schools).toEqual(school);
   })


   test('should return updateSchool',()=>{
       const school = {id:3,name:'seoa matric',about:'very good',affilation:'cbse'}
       const newState = SchoolReducers(undefined,{
           type:ActionTypes.UPDATE_SCHOOL,
           payload:school
       })
       expect(newState.school).toEqual(school);
   })

   test('should return addSuggestion',()=>{
       const suggestion ={id:1,name:'deepan',schoolname:'seo matric',about:'good'}
       const newState = SchoolReducers(undefined,{
           type:ActionTypes.ADD_SUGGESTION,
           payload:suggestion
       })
         expect(newState.suggestion).toEqual(suggestion);
   })

   test('should return getsuggestion',()=>{
    const suggestion = [{id:1,name:'deepan',schoolname:'seo matric',about:'good'}]
    const newState = SchoolReducers(undefined,{
        type:ActionTypes.SUGGESTION_LISTING,
        payload:suggestion
    })
      expect(newState.suggestion).toEqual(suggestion);
   })

   test('should return getsuggestionById',()=>{
    const suggestion ={id:1,name:'deepan',schoolname:'seo matric',about:'good'}
    const newState = SchoolReducers(undefined,{
        type:ActionTypes.SUGGESTION_ID,
        payload:suggestion
    })
      expect(newState.sugg).toEqual(suggestion);
   })

})