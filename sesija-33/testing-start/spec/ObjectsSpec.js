describe("Objects",function(){
	
	describe("Initialization", function(){
		it("should be undefined", function(){
			var customer;
			expect(customer).toBeUndefined();
		});
		it("should be null", function(){
			var customer = null;
			expect(customer).toBeNull();
		});		
	});

	describe("Object Literals", function(){
		var customer = {
				first_name : "Craig",
				"last_name" : "McKeachie"
		};

		describe("Retrieval", function(){
			it("first_name can be retrieved", function(){
				expect(customer.first_name).toBe("Craig");
				
			});

			it("objects are just hash tables", function(){
				expect(customer["last_name"]).toBe("McKeachie");
				expect(customer.last_name).toBe("McKeachie");
				expect(customer["first_name"]).toBe("Craig");
			});

			it("default values", function(){
				expect(customer.middle_name).toBeFalsy();
				expect(customer.middle_name || "not provided").toBe("not provided");
			});		
			
			it("setting a property", function() {
				customer.first_name = "Cika Rade";
				expect(customer.first_name).toBe("Cika Rade");

				customer["first_name"] = "Miljan";
				expect(customer["first_name"]).toBe("Miljan");
				expect(customer.first_name).toBe("Miljan");


			});			

		});

		describe("Reference", function(){
			it("objects are passed by reference", function(){
				var customer2 = customer;
				expect(customer2).toEqual(customer);
				function addNumber(myCustomer){
					myCustomer.number = 1;
				}

				addNumber(customer);
				expect(customer2.number).toEqual(1);

			});
		
		});

		describe("Reflection",function(){
			var carRental = {
				confirmation: "3453E",
				type: "compact",
				provider: {name:"Enterprise"},
				cost: 300,
				testFunc : function(){
					var t = 1;
					console.log(t + " from method");
				}
			};

			it("should be able to check types", function(){
				expect(typeof carRental.provider).toBe("object");
				expect(typeof carRental.type).toBe("string");
				expect(typeof carRental.cost).toBe("number");


			});
			it("Enumeration", function(){
				var counter = 0;
				for(var name in carRental){
					console.log(name + ":" + carRental[name]);
					counter++;
				}
				expect(counter).toEqual(5);
			})

		});
		
	});
	
});



