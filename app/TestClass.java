import java.io.*;
import java.util.*;

public class TestClass {
    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int x = sc.nextInt();
        int y = sc.nextInt();
        
        int[] a = new int[n];
        for (int i = 0; i < n; i++) {
            a[i] = sc.nextInt();
        }
        
        System.out.println(stepNeeded(n, x, y, a));
        sc.close();
    }
    
    static int stepNeeded(int n, int x, int y, int[] a) {
        // BFS to find minimum jumps
        Queue<int[]> queue = new LinkedList<>();
        Set<Integer> visited = new HashSet<>();
        
        // Start from position 0 (left bank)
        queue.offer(new int[]{0, 0}); // {position, jumps}
        visited.add(0);
        
        while (!queue.isEmpty()) {
            int[] current = queue.poll();
            int pos = current[0];
            int jumps = current[1];
            
            // Try jumping left (maximum x steps)
            for (int step = 1; step <= x; step++) {
                int newPos = pos - step;
                
                // If we reach position 0 or less from any log, we've reached the left end
                if (newPos <= 0 && pos > 0) {
                    return jumps + 1;
                }
                
                // Check if newPos is on any log
                if (newPos > 0 && isOnLog(newPos, a) && !visited.contains(newPos)) {
                    visited.add(newPos);
                    queue.offer(new int[]{newPos, jumps + 1});
                }
            }
            
            // Try jumping right (maximum y steps)
            for (int step = 1; step <= y; step++) {
                int newPos = pos + step;
                
                // Check if we've reached the right end of any log
                if (isRightEndOfLog(newPos, a)) {
                    return jumps + 1;
                }
                
                // Check if newPos is on any log (but not at the right end)
                if (isOnLog(newPos, a) && !visited.contains(newPos)) {
                    visited.add(newPos);
                    queue.offer(new int[]{newPos, jumps + 1});
                }
            }
        }
        
        return -1; // No solution found
    }
    
    // Check if position is on any log
    static boolean isOnLog(int pos, int[] a) {
        if (pos <= 0) return false;
        
        int currentStart = 1;
        for (int i = 0; i < a.length; i++) {
            int logEnd = currentStart + a[i] - 1;
            if (pos >= currentStart && pos <= logEnd) {
                return true;
            }
            currentStart += a[i];
        }
        return false;
    }
    
    // Check if position is the right end of any log
    static boolean isRightEndOfLog(int pos, int[] a) {
        if (pos <= 0) return false;
        
        int currentStart = 1;
        for (int i = 0; i < a.length; i++) {
            int logEnd = currentStart + a[i] - 1;
            if (pos == logEnd) {
                return true;
            }
            currentStart += a[i];
        }
        return false;
    }
}