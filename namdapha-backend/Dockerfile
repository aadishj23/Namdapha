# Use an official OpenJDK runtime
FROM openjdk:17-jdk-slim

# Set working directory inside the container
WORKDIR /app

# Copy the Maven wrapper and pom.xml to cache dependencies
COPY pom.xml mvnw mvnw.cmd ./
COPY .mvn .mvn

# Run Maven to download dependencies
RUN ./mvnw dependency:go-offline

# Copy the rest of the project and build the JAR
COPY . .
RUN ./mvnw clean package -DskipTests

# Run the application
EXPOSE 8080
CMD ["java", "-jar", "target/namdapha-backend-0.0.1-SNAPSHOT.jar"]
