import { getDefaultHandler, gql } from 'apollo-server-svelte-kit';
import prisma from '../api/prisma'

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

		type Query {
			level1: [Obj1],
			level10: [Obj1],
		}
	`,
	{
		Query: {
			level1: () => { 
				return prisma.Obj1.findMany({
					select: {
						name1: true,
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