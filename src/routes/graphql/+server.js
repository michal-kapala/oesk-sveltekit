import { getDefaultHandler, gql } from 'apollo-server-svelte-kit';
import prisma from '../api/prisma'
import md5 from 'js-md5';

const handler = getDefaultHandler(
	gql`
		type Obj1 {
			id: Int!,
			name1: String!,
			id_obj2: Int!,
			Obj2: Obj2,
		}

		type Obj2 {
			id: Int!,
			name2: String!,
			id_obj3: Int!,
			Obj3: Obj3,
		}

		type Obj3 {
			id: Int!,
			name3: String!,
			id_obj4: Int!,
			Obj4: Obj4,
		}

		type Obj4 {
			id: Int!,
			name4: String!,
			id_obj5: Int!,
			Obj5: Obj5,
		}

		type Obj5 {
			id: Int!,
			name5: String!,
			id_obj6: Int!,
			Obj6: Obj6,
		}

		type Obj6 {
			id: Int!,
			name6: String!,
			id_obj7: Int!,
			Obj7: Obj7,
		}

		type Obj7 {
			id: Int!,
			name7: String!,
			id_obj8: Int!,
			Obj8: Obj8,
		}

		type Obj8 {
			id: Int!,
			name8: String!,
			id_obj9: Int!,
			Obj9: Obj9,
		}

		type Obj9 {
			id: Int!,
			name9: String!,
			id_obj10: Int!,
			Obj10: Obj10,
		}

		type Obj10 {
			id: Int!,
			name10: String!,
		}

		type Mutation {
			updateName(someNumber: Int): String
		}

		type Query {
			level1: [Obj1],
			level2: [Obj1],
			level5: [Obj1],
			level10: [Obj1],
		}
	`,
	{
		Mutation: {
			updateName: async (someNumber) => {
				
				// gets random id to update the object name for
				const rng = Math.floor(Math.random() * 999) + 1;
				// generate a new name
				const newName = md5(`${rng + Date.now()}`);

				// update random table
				let obj;
				switch (rng % 10) {
					case 0:
						obj = await prisma.Obj1.update({
							where: {
								id: rng,
							},
							data: {
								name1: newName
							},
						});
						break;
					case 1:
						obj = await prisma.Obj2.update({
							where: {
								id: rng,
							},
							data: {
								name2: newName
							},
						});
						break;
					case 2:
						obj = await prisma.Obj3.update({
							where: {
								id: rng,
							},
							data: {
								name3: newName
							},
						});
						break;
					case 3:
						obj = await prisma.Obj4.update({
							where: {
								id: rng,
							},
							data: {
								name4: newName
							},
						});
						break;
					case 4:
						obj = await prisma.Obj5.update({
							where: {
								id: rng,
							},
							data: {
								name5: newName
							},
						});
						break;
					case 5:
						obj = await prisma.Obj6.update({
							where: {
								id: rng,
							},
							data: {
								name6: newName
							},
						});
						break;
					case 6:
						obj = await prisma.Obj7.update({
							where: {
								id: rng,
							},
							data: {
								name7: newName
							},
						});
						break;
					case 7:
						obj = await prisma.Obj8.update({
							where: {
								id: rng,
							},
							data: {
								name8: newName
							},
						});
						break;
					case 8:
						obj = await prisma.Obj9.update({
							where: {
								id: rng,
							},
							data: {
								name9: newName
							},
						});
						break;
					case 9:
						obj = await prisma.Obj10.update({
							where: {
								id: rng,
							},
							data: {
								name10: newName
							},
						});
						break;
				}

				return newName;
			}
		},
		Query: {
			level1: () => { 
				return prisma.Obj1.findMany({
					select: {
						name1: true,
					}
				})
			},
			level2: () => { 
				return prisma.Obj1.findMany({
					select: {
						name1: true,
						Obj2: {
							select: {
								name2: true
							}
						}
					}
				})
			},
			level5: () => {
				return prisma.Obj1.findMany({
					select: {
						name1: true,
						Obj2: {
							select: {
								name2: true,
								Obj3: {
									select: {
										name3: true,
										Obj4: {
											select: {
												name4: true,
												Obj5: {
													select: {
														name5: true,
													}
												}
											}
										}
									}
								}
							}
						}
					}
				})
			},
			level10: () => {
				return prisma.Obj1.findMany({
					select: {
						name1: true,
						Obj2: {
							select: {
								name2: true,
								Obj3: {
									select: {
										name3: true,
										Obj4: {
											select: {
												name4: true,
												Obj5: {
													select: {
														name5: true,
														Obj6: {
															select: {
																name6: true,
																Obj7: {
																	select: {
																		name7: true,
																		Obj8: {
																			select: {
																				name8: true,
																				Obj9: {
																					select: {
																						name9: true,
																						Obj10: {
																							select: {
																								name10: true,
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				})
			}
		},
	}
);

export const GET = handler;
export const HEAD = handler;
export const POST = handler;