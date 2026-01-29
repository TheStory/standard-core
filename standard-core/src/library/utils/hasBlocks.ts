import type { BlocksContent } from "@strapi/blocks-react-renderer";
import type { Data } from "@strapi/strapi";

type BlocksInput = Data.Component | BlocksContent | undefined | null;

/**
 * Helper function to check if blocks content is empty or invalid
 * @param blocks - The blocks content to validate
 * @returns true if blocks are empty, null, undefined, not an array, or contain only empty text
 */
const isBlocksEmpty = (blocks: BlocksInput): boolean => {
  // Check for null, undefined, or not an array
  if (!blocks || !Array.isArray(blocks) || blocks.length === 0) {
    return true;
  }

  // Check if all blocks contain only empty text
  return blocks.every((block) => {
    if (block.type === "paragraph" && Array.isArray(block.children)) {
      return block.children.every(
        (child) =>
          child.type === "text" && (!child.text || child.text.trim() === ""),
      );
    }
    // For other block types, consider them as non-empty if they exist
    return false;
  });
};

const hasBlocks = (blocks: BlocksInput) => !isBlocksEmpty(blocks);

export { isBlocksEmpty, hasBlocks };
