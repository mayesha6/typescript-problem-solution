# Question - 4 What is the use of enums in TypeScript? Provide an example of a numeric and string enum.

## Enum
Enum stands for enumeration. It is a user-defined data type, which allows us to define a set of named constants. 

## enum does not store duplicate key.
Example:
enum Names{
Name = "mayesha",
Name = "smorony"    // Avoid duplicate keys.
}
This is an error, because here we use the name property twice and enum does not allow duplicate properties/keys.

## Types of Enums in TypeScript
There are 3 types of enum. They are: 1.string enum, 2.number enum, 3.heterogeneous enum.
1. String enum: When we store string values ​​for enum, it is called string enum. 
Example:
enum Str {
MyName = "mayesha",
BroName = "mashrif",
SisName="Tania"
}

2. Number enum: When we store number values ​​for enum, it is called number enum. 
Example:
enum Num {
MyAge=26,
BroAge=14,
SisAge=23
}

3. Heterogeneous enum: When we store both string and number values ​​for enum at the same time, it is called heterogeneous enum.
Example:
enum StrNum {
Name = "mayesha",
Age = 26
}

## Uses of Enum

1. Code is easier to understand and maintain.
2. We can use the same enum in many files.
3. It prevents invalid values ​​or types.
4. If we want to change the property value of an enum, we only need to change it from the enum, not from the entire codebase.


# Question 5 - What is type inference in TypeScript? Why is it helpful?

## Type Inference
When we do not define any type for a variable and assign a value to the variable for the first time, the compiler automatically determines the type of the variable based on the type of the value. This feature is known as type inference, and it is a powerful capability of the TypeScript compiler.

Example:
let name='mayesha'
typescript infers the type of the key 'name' as string.

## Advantages of type inference:
1. We do not have to write the type everywhere, just declare the variable and initialize the value, type inference will automatically figure out the type of the variable.
2. The code is clean because the type is not defined everywhere. This makes the code easy to understand and maintain.
3. Without explicit typing, it provides type safety, error checking, etc.
