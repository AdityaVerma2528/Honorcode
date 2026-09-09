export const JAVA_QUESTIONS = [
  {
    q: "Which OOP principle allows an object to take different forms?",
    opts: ["Encapsulation", "Inheritance", "Polymorphism", "Abstraction"],
    ans: 2,
  },
  {
    q: "Which keyword is used to prevent a class from being subclassed in Java?",
    opts: ["static", "final", "private", "sealed"],
    ans: 1,
  },
  {
    q: "What is the time complexity of accessing an element in an ArrayList by index?",
    opts: ["O(log n)", "O(n)", "O(1)", "O(n log n)"],
    ans: 2,
  },
  {
    q: "Which interface must a class implement to be usable in a for-each loop?",
    opts: ["Iterable", "Iterator", "Comparable", "Serializable"],
    ans: 0,
  },
  {
    q: "What does the volatile keyword guarantee in Java?",
    opts: [
      "Thread safety",
      "Visibility across threads",
      "Atomic operations",
      "Mutual exclusion",
    ],
    ans: 1,
  },
  {
    q: "What is the output of System.out.println(10 / 3) in Java?",
    opts: ["3.33", "3", "3.0", "Compile error"],
    ans: 1,
  },
  {
    q: "Which exception is thrown when you access an array with an invalid index?",
    opts: [
      "NullPointerException",
      "IllegalArgumentException",
      "ArrayIndexOutOfBoundsException",
      "ClassCastException",
    ],
    ans: 2,
  },
  {
    q: "What does HashMap.put() return if the key already exists?",
    opts: ["null", "The new value", "The old value", "false"],
    ans: 2,
  },
  {
    q: "Which Java 8 feature allows passing behavior as a parameter?",
    opts: ["Generics", "Lambda expressions", "Annotations", "Reflection"],
    ans: 1,
  },
  {
    q: "Which keyword is used to create an object in Java?",
    opts: ["class", "new", "object", "create"],
    ans: 1,
  },

  // =========================
  // JAVA BASICS
  // =========================

  {
    q: "Which method is the entry point of a standard Java application?",
    opts: [
      "start()",
      "run()",
      "main()",
      "execute()",
    ],
    ans: 2,
  },
  {
    q: "Which of the following is NOT a primitive type in Java?",
    opts: ["int", "boolean", "String", "double"],
    ans: 2,
  },
  {
    q: "What is the size of an int in Java?",
    opts: ["8 bits", "16 bits", "32 bits", "64 bits"],
    ans: 2,
  },
  {
    q: "Which primitive type stores a single Unicode character?",
    opts: ["String", "char", "byte", "character"],
    ans: 1,
  },
  {
    q: "What is the default value of an instance variable of type int?",
    opts: ["null", "0", "1", "undefined"],
    ans: 1,
  },
  {
    q: "Which keyword is used to declare a constant variable?",
    opts: ["const", "constant", "final", "static"],
    ans: 2,
  },
  {
    q: "Which operator is used for logical AND?",
    opts: ["&", "&&", "||", "!"],
    ans: 1,
  },
  {
    q: "Which operator is used for logical OR?",
    opts: ["|", "&&", "||", "!"],
    ans: 2,
  },
  {
    q: "What does the == operator compare when used with primitive values?",
    opts: [
      "References",
      "Values",
      "Memory addresses",
      "Object types",
    ],
    ans: 1,
  },
  {
    q: "Which statement is used to exit a loop immediately?",
    opts: ["continue", "skip", "break", "exit"],
    ans: 2,
  },

  // =========================
  // OOP
  // =========================

  {
    q: "Which OOP concept hides internal implementation details?",
    opts: [
      "Inheritance",
      "Abstraction",
      "Polymorphism",
      "Composition",
    ],
    ans: 1,
  },
  {
    q: "Which OOP concept bundles data and methods together?",
    opts: [
      "Encapsulation",
      "Inheritance",
      "Abstraction",
      "Overloading",
    ],
    ans: 0,
  },
  {
    q: "Which keyword is used to inherit from a class?",
    opts: ["implements", "extends", "inherits", "super"],
    ans: 1,
  },
  {
    q: "Which keyword is used when a class implements an interface?",
    opts: ["extends", "inherits", "implements", "interface"],
    ans: 2,
  },
  {
    q: "Can Java support multiple inheritance through classes?",
    opts: ["Yes", "No", "Only with final classes", "Only with abstract classes"],
    ans: 1,
  },
  {
    q: "How can Java achieve multiple inheritance of type?",
    opts: [
      "Using multiple classes",
      "Using interfaces",
      "Using constructors",
      "Using packages",
    ],
    ans: 1,
  },
  {
    q: "What is method overloading?",
    opts: [
      "Same method name with different parameter lists",
      "Same method in different classes",
      "Replacing a parent method",
      "Making a method private",
    ],
    ans: 0,
  },
  {
    q: "What is method overriding?",
    opts: [
      "Creating multiple constructors",
      "Providing a subclass implementation of a parent method",
      "Changing method parameters",
      "Making a method static",
    ],
    ans: 1,
  },
  {
    q: "Which keyword refers to the current object?",
    opts: ["self", "current", "this", "object"],
    ans: 2,
  },
  {
    q: "Which keyword is used to refer to the parent class?",
    opts: ["parent", "base", "super", "this"],
    ans: 2,
  },

  // =========================
  // INHERITANCE / ABSTRACTION
  // =========================

  {
    q: "Can an abstract class have a constructor?",
    opts: ["Yes", "No", "Only private constructors", "Only static constructors"],
    ans: 0,
  },
  {
    q: "Can an abstract class contain non-abstract methods?",
    opts: ["Yes", "No", "Only static methods", "Only final methods"],
    ans: 0,
  },
  {
    q: "Can an interface contain default methods?",
    opts: ["Yes", "No", "Only before Java 8", "Only in abstract interfaces"],
    ans: 0,
  },
  {
    q: "Which keyword is used to declare an abstract class?",
    opts: ["interface", "abstract", "virtual", "base"],
    ans: 1,
  },
  {
    q: "Which access modifier provides the widest access?",
    opts: ["private", "protected", "default", "public"],
    ans: 3,
  },
  {
    q: "Which access modifier allows access only within the declaring class?",
    opts: ["public", "protected", "private", "default"],
    ans: 2,
  },
  {
    q: "What is package-private access?",
    opts: [
      "Accessible everywhere",
      "Accessible only inside the same package",
      "Accessible only by subclasses",
      "Accessible only by interfaces",
    ],
    ans: 1,
  },
  {
    q: "Can a final method be overridden?",
    opts: ["Yes", "No", "Only by abstract classes", "Only by interfaces"],
    ans: 1,
  },
  {
    q: "Can a final class be inherited?",
    opts: ["Yes", "No", "Only by interfaces", "Only inside the same package"],
    ans: 1,
  },
  {
    q: "Can an abstract class be instantiated directly?",
    opts: ["Yes", "No", "Only using new", "Only using reflection"],
    ans: 1,
  },

  // =========================
  // STRINGS
  // =========================

  {
    q: "Are Java String objects mutable?",
    opts: ["Yes", "No", "Only in Java 8", "Only when declared final"],
    ans: 1,
  },
  {
    q: "Which class is commonly used for mutable strings in single-threaded code?",
    opts: ["String", "StringBuilder", "StringBuffer", "CharSequence"],
    ans: 1,
  },
  {
    q: "Which class provides synchronized mutable string operations?",
    opts: ["String", "StringBuilder", "StringBuffer", "StringPool"],
    ans: 2,
  },
  {
    q: "What does String.equals() compare?",
    opts: [
      "References",
      "String contents",
      "Memory addresses",
      "Hash codes only",
    ],
    ans: 1,
  },
  {
    q: "What is the result of \"Java\".length()?",
    opts: ["3", "4", "5", "6"],
    ans: 1,
  },
  {
    q: "Which method converts a String to lowercase?",
    opts: ["lower()", "toLowerCase()", "lowerCase()", "toLower()"],
    ans: 1,
  },
  {
    q: "Which method checks whether a String contains a particular sequence?",
    opts: ["contains()", "has()", "includes()", "find()"],
    ans: 0,
  },
  {
    q: "What is the String pool?",
    opts: [
      "A database of strings",
      "A pool of reusable String literals",
      "A thread pool",
      "A collection of StringBuilder objects",
    ],
    ans: 1,
  },
  {
    q: "Which method removes leading and trailing whitespace from a String?",
    opts: ["clean()", "strip()", "trim()", "removeSpace()"],
    ans: 2,
  },
  {
    q: "Which interface is implemented by String?",
    opts: ["Runnable", "CharSequence", "SerializableOnly", "Iterable"],
    ans: 1,
  },

  // =========================
  // COLLECTIONS
  // =========================

  {
    q: "Which collection does not allow duplicate elements?",
    opts: ["List", "Set", "Queue", "ArrayList"],
    ans: 1,
  },
  {
    q: "Which collection maintains insertion order and allows duplicates?",
    opts: ["HashSet", "TreeSet", "List", "Map"],
    ans: 2,
  },
  {
    q: "Which Map implementation generally provides average O(1) lookup?",
    opts: ["TreeMap", "HashMap", "LinkedList", "ArrayList"],
    ans: 1,
  },
  {
    q: "Which Map implementation maintains sorted order by keys?",
    opts: ["HashMap", "LinkedHashMap", "TreeMap", "WeakHashMap"],
    ans: 2,
  },
  {
    q: "Which collection maintains insertion order for keys?",
    opts: ["HashMap", "TreeMap", "LinkedHashMap", "Hashtable"],
    ans: 2,
  },
  {
    q: "Which data structure follows FIFO ordering?",
    opts: ["Stack", "Queue", "Tree", "Set"],
    ans: 1,
  },
  {
    q: "Which data structure follows LIFO ordering?",
    opts: ["Queue", "Stack", "Deque", "PriorityQueue"],
    ans: 1,
  },
  {
    q: "Which collection allows elements to be accessed by index?",
    opts: ["HashSet", "ArrayList", "HashMap", "TreeSet"],
    ans: 1,
  },
  {
    q: "Which interface represents a double-ended queue?",
    opts: ["Queue", "Deque", "List", "Set"],
    ans: 1,
  },
  {
    q: "Which collection is generally suitable when frequent random access is required?",
    opts: ["ArrayList", "LinkedList", "HashSet", "TreeSet"],
    ans: 0,
  },

  // =========================
  // HASHING / EQUALS
  // =========================

  {
    q: "Which methods are commonly overridden together when defining object equality?",
    opts: [
      "equals() and hashCode()",
      "toString() and clone()",
      "compareTo() and finalize()",
      "wait() and notify()",
    ],
    ans: 0,
  },
  {
    q: "What should be true when two objects are equal according to equals()?",
    opts: [
      "They must have different hash codes",
      "They must have the same hash code",
      "They must be the same object",
      "They must have different references",
    ],
    ans: 1,
  },
  {
    q: "What happens when two unequal objects have the same hash code?",
    opts: [
      "The program always crashes",
      "They cannot be stored in a HashMap",
      "A hash collision occurs",
      "They become equal",
    ],
    ans: 2,
  },
  {
    q: "Which method is used to calculate an object's hash value?",
    opts: ["hash()", "hashCode()", "getHash()", "calculateHash()"],
    ans: 1,
  },
  {
    q: "Which interface is used to define natural ordering?",
    opts: ["Comparator", "Comparable", "Sortable", "Ordering"],
    ans: 1,
  },
  {
    q: "Which interface is commonly used to define custom ordering externally?",
    opts: ["Comparable", "Comparator", "Iterable", "Iterator"],
    ans: 1,
  },
  {
    q: "Which method is defined by Comparable?",
    opts: ["compare()", "compareTo()", "sort()", "order()"],
    ans: 1,
  },
  {
    q: "Which method is defined by Comparator?",
    opts: ["compare()", "compareTo()", "sort()", "order()"],
    ans: 0,
  },
  {
    q: "What does HashMap use to locate keys efficiently?",
    opts: [
      "Only insertion order",
      "Hashing",
      "Binary search only",
      "Linked lists only",
    ],
    ans: 1,
  },
  {
    q: "Can HashMap contain one null key?",
    opts: ["Yes", "No", "Only in Java 7", "Only in Java 8"],
    ans: 0,
  },

  // =========================
  // EXCEPTIONS
  // =========================

  {
    q: "Which keyword is used to explicitly throw an exception?",
    opts: ["throws", "throw", "exception", "raise"],
    ans: 1,
  },
  {
    q: "Which keyword declares exceptions that a method may throw?",
    opts: ["throw", "throws", "catch", "exception"],
    ans: 1,
  },
  {
    q: "Which block is used to handle an exception?",
    opts: ["try", "catch", "finally", "handle"],
    ans: 1,
  },
  {
    q: "Which block normally executes whether or not an exception occurs?",
    opts: ["try", "catch", "finally", "throw"],
    ans: 2,
  },
  {
    q: "Which is a checked exception?",
    opts: [
      "NullPointerException",
      "ArithmeticException",
      "IOException",
      "ArrayIndexOutOfBoundsException",
    ],
    ans: 2,
  },
  {
    q: "Which is an unchecked exception?",
    opts: [
      "IOException",
      "SQLException",
      "ClassNotFoundException",
      "NullPointerException",
    ],
    ans: 3,
  },
  {
    q: "Which class is the superclass of most exceptions?",
    opts: ["Object", "Throwable", "ExceptionOnly", "Error"],
    ans: 1,
  },
  {
    q: "Which keyword creates a custom exception hierarchy by inheritance?",
    opts: ["extends", "throws", "exception", "catch"],
    ans: 0,
  },
  {
    q: "Can one try block have multiple catch blocks?",
    opts: ["Yes", "No", "Only two", "Only with finally"],
    ans: 0,
  },
  {
    q: "What happens if an exception is not caught?",
    opts: [
      "It is ignored",
      "It is propagated up the call stack",
      "The JVM always restarts",
      "The program continues normally",
    ],
    ans: 1,
  },

  // =========================
  // JAVA 8+
  // =========================

  {
    q: "Which feature was introduced in Java 8 for functional-style programming?",
    opts: ["Lambda expressions", "Modules", "Records", "Virtual threads"],
    ans: 0,
  },
  {
    q: "Which interface represents a function that takes one argument and returns a result?",
    opts: ["Consumer", "Supplier", "Function", "Predicate"],
    ans: 2,
  },
  {
    q: "Which functional interface accepts an argument but returns no result?",
    opts: ["Consumer", "Supplier", "Function", "Predicate"],
    ans: 0,
  },
  {
    q: "Which functional interface takes no argument and returns a value?",
    opts: ["Consumer", "Supplier", "Function", "Predicate"],
    ans: 1,
  },
  {
    q: "Which functional interface returns a boolean result?",
    opts: ["Consumer", "Supplier", "Function", "Predicate"],
    ans: 3,
  },
  {
    q: "What does Stream.filter() do?",
    opts: [
      "Transforms every element",
      "Selects elements matching a condition",
      "Sorts elements",
      "Terminates the stream",
    ],
    ans: 1,
  },
  {
    q: "What does Stream.map() generally do?",
    opts: [
      "Transforms elements",
      "Removes elements",
      "Sorts elements",
      "Creates threads",
    ],
    ans: 0,
  },
  {
    q: "Which operation is typically terminal on a Stream?",
    opts: ["filter()", "map()", "collect()", "sorted()"],
    ans: 2,
  },
  {
    q: "Which method can be used to collect stream elements into a List?",
    opts: ["collect()", "gather()", "toListOnly()", "store()"],
    ans: 0,
  },
  {
    q: "What does Optional help reduce?",
    opts: [
      "Memory allocation",
      "Null-related errors",
      "Thread creation",
      "Compilation time",
    ],
    ans: 1,
  },
  {
    q: "Which keyword is used to define a lambda parameter type explicitly?",
    opts: ["lambda", "var", "type", "param"],
    ans: 1,
  },

  // =========================
  // MULTITHREADING
  // =========================

  {
    q: "Which interface can be implemented to define a task for a thread?",
    opts: ["Runnable", "Threadable", "Executable", "Task"],
    ans: 0,
  },
  {
    q: "Which class can be extended to create a thread?",
    opts: ["Runnable", "Thread", "Executor", "Process"],
    ans: 1,
  },
  {
    q: "Which method starts a new thread?",
    opts: ["run()", "start()", "execute()", "begin()"],
    ans: 1,
  },
  {
    q: "What happens if run() is called directly instead of start()?",
    opts: [
      "A new thread is always created",
      "The method executes in the current thread",
      "The JVM crashes",
      "The thread becomes daemon automatically",
    ],
    ans: 1,
  },
  {
    q: "Which keyword is used for mutual exclusion?",
    opts: ["volatile", "synchronized", "atomic", "locked"],
    ans: 1,
  },
  {
    q: "What is a race condition?",
    opts: [
      "A compilation error",
      "A situation where result depends on thread timing",
      "A memory leak",
      "A dead thread",
    ],
    ans: 1,
  },
  {
    q: "What is deadlock?",
    opts: [
      "A thread running too quickly",
      "Threads waiting indefinitely for each other's locks",
      "A failed compilation",
      "A garbage collection pause",
    ],
    ans: 1,
  },
  {
    q: "Which interface represents a task that returns a result?",
    opts: ["Runnable", "Callable", "Executor", "FutureTaskOnly"],
    ans: 1,
  },
  {
    q: "Which interface represents the result of an asynchronous computation?",
    opts: ["Future", "Result", "AsyncResult", "Promise"],
    ans: 0,
  },
  {
    q: "What does the volatile keyword primarily provide?",
    opts: [
      "Atomicity",
      "Visibility",
      "Mutual exclusion",
      "Deadlock prevention",
    ],
    ans: 1,
  },

  // =========================
  // JVM / MEMORY
  // =========================

  {
    q: "What does JVM stand for?",
    opts: [
      "Java Variable Machine",
      "Java Virtual Machine",
      "Java Verified Machine",
      "Java Visual Machine",
    ],
    ans: 1,
  },
  {
    q: "What does JDK stand for?",
    opts: [
      "Java Development Kit",
      "Java Deployment Kernel",
      "Java Debug Kit",
      "Java Developer Kernel",
    ],
    ans: 0,
  },
  {
    q: "What does JRE stand for?",
    opts: [
      "Java Runtime Environment",
      "Java Runtime Engine",
      "Java Resource Environment",
      "Java Remote Execution",
    ],
    ans: 0,
  },
  {
    q: "Which component executes Java bytecode?",
    opts: ["JVM", "JDK", "JRE only", "javac"],
    ans: 0,
  },
  {
    q: "Which tool compiles Java source code into bytecode?",
    opts: ["java", "javac", "jvm", "jar"],
    ans: 1,
  },
  {
    q: "Where are Java objects generally allocated?",
    opts: ["Stack", "Heap", "CPU register only", "Method signature"],
    ans: 1,
  },
  {
    q: "Where are method call frames generally stored?",
    opts: ["Heap", "Stack", "String pool", "Code cache"],
    ans: 1,
  },
  {
    q: "What is garbage collection?",
    opts: [
      "Deleting source files",
      "Automatically reclaiming memory from unreachable objects",
      "Removing exceptions",
      "Clearing the stack",
    ],
    ans: 1,
  },
  {
    q: "Which class is the root of the Java class hierarchy?",
    opts: ["Main", "Object", "Class", "System"],
    ans: 1,
  },
  {
    q: "What does System.gc() request?",
    opts: [
      "Immediate garbage collection",
      "The JVM to consider performing garbage collection",
      "Memory allocation",
      "Thread termination",
    ],
    ans: 1,
  },

  // =========================
  // GENERICS
  // =========================

  {
    q: "What is the primary purpose of generics?",
    opts: [
      "Runtime reflection",
      "Compile-time type safety",
      "Thread synchronization",
      "Memory management",
    ],
    ans: 1,
  },
  {
    q: "What does List<String> mean?",
    opts: [
      "A list containing only String elements",
      "A list containing only integers",
      "A String subclass",
      "A generic method",
    ],
    ans: 0,
  },
  {
    q: "Which symbol is commonly used as a generic type parameter?",
    opts: ["@", "T", "#", "$"],
    ans: 1,
  },
  {
    q: "Can primitive types such as int be directly used as generic type arguments?",
    opts: ["Yes", "No", "Only for List", "Only for Map"],
    ans: 1,
  },
  {
    q: "Which type should be used instead of int in a generic collection?",
    opts: ["Integer", "NumberInt", "PrimitiveInt", "IntObject"],
    ans: 0,
  },
  {
    q: "What is type erasure?",
    opts: [
      "Deleting classes",
      "Removal of most generic type information at runtime",
      "Deleting variables",
      "Removing interfaces",
    ],
    ans: 1,
  },
  {
    q: "What does <?> represent?",
    opts: [
      "An unknown type",
      "Only String",
      "Only Object",
      "A primitive type",
    ],
    ans: 0,
  },
  {
    q: "What does <? extends Number> generally represent?",
    opts: [
      "Number or a subtype of Number",
      "Only Number",
      "Only Integer",
      "Any primitive",
    ],
    ans: 0,
  },
  {
    q: "What does <? super Integer> generally allow?",
    opts: [
      "Integer or its supertypes",
      "Only Integer",
      "Only Number",
      "Only Object",
    ],
    ans: 0,
  },
  {
    q: "Which keyword declares a generic method type parameter?",
    opts: ["generic", "type", "Before the return type, such as <T>", "template"],
    ans: 2,
  },
];