// 'use strict'
// const expect = require('chai').expect
// const userFunctions = require('../server/server')
//
//
// describe('User creation test', () => {
//   describe('loads new username to database', () {
//     userFunctions.addUser({username: 'sad'})
//     expect(storage.read().users.length).to.equal(1)
//   })
//   describe('User already exists', () => {
//     it('does not add second user', () => {
//       userFunctions.addUser({username: 'sad'})
//       userFunctions.addUser({username: 'sad'})
//       expect(storage.read().users.length).to.equal(1)
//     })
//   })
// })
//
// describe('deletes user object', () => {
//   context('deletes if user object exists', () => {
//     it('deletes sad', () => {
//       userFunctions.deleteUser('sad')
//       expect(storage.read().users.length).to.equal(0)
//     })
//   })
//   context('does not delete if user object exists', () => {
//     it('stays the same', () => {
//       userFunctions.deleteUser('sad')
//       expect(storage.read().users.length).to.equal(1)
//     })
//   })
// })
