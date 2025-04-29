/**
 * Utility function to generate mock embedding vectors
 * 
 * In a real-world scenario, we would use a ML model to generate
 * embeddings from text. Since this is just a simulation, we'll
 * generate deterministic vectors based on text content.
 */

// Define vector dimension
export const VECTOR_DIMENSION = 1536;

/**
 * Creates a deterministic embedding vector from text
 * @param text - Text to encode as vector
 * @returns A numeric vector of dimension VECTOR_DIMENSION
 */
export function generateMockEmbedding(text: string): number[] {
  // Convert text to lowercase and remove punctuation for consistency
  const cleanText = text.toLowerCase().replace(/[^\w\s]/g, '');
  
  // Initialize an array of zeros
  const vector = new Array(VECTOR_DIMENSION).fill(0);
  
  // Generate a vector based on character frequencies and positions
  for (let i = 0; i < cleanText.length; i++) {
    const char = cleanText[i];
    const charCode = char.charCodeAt(0);
    
    // Use character code to influence vector values
    const position = i % VECTOR_DIMENSION;
    vector[position] += charCode / 1000; // Normalize to get small float values
  }
  
  // Add some word-level features
  const words = cleanText.split(/\s+/);
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    let hash = 0;
    
    // Simple hash of the word
    for (let j = 0; j < word.length; j++) {
      hash = ((hash << 5) - hash) + word.charCodeAt(j);
      hash |= 0; // Convert to 32bit integer
    }
    
    // Use hash to influence vector
    const position = Math.abs(hash) % VECTOR_DIMENSION;
    vector[position] += 0.5; // Add significance to this dimension
  }
  
  // Normalize the vector (convert to unit vector)
  const magnitude = Math.sqrt(vector.reduce((sum, val) => sum + val * val, 0));
  return vector.map(val => magnitude > 0 ? val / magnitude : 0);
}

/**
 * Calculate cosine similarity between two vectors
 * (Not used in the application since PostgreSQL will do this,
 * but useful for testing)
 */
export function cosineSimilarity(a: number[], b: number[]): number {
  if (a.length !== b.length) {
    throw new Error('Vectors must have the same dimension');
  }
  
  let dotProduct = 0;
  let magnitudeA = 0;
  let magnitudeB = 0;
  
  for (let i = 0; i < a.length; i++) {
    dotProduct += a[i] * b[i];
    magnitudeA += a[i] * a[i];
    magnitudeB += b[i] * b[i];
  }
  
  magnitudeA = Math.sqrt(magnitudeA);
  magnitudeB = Math.sqrt(magnitudeB);
  
  return dotProduct / (magnitudeA * magnitudeB);
} 